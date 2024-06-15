import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Animated,
} from "react-native";
import Category from "../models/category";
import login from "../util/auth";
import axios from "axios";
import { AuthContext } from "../store/auth-context";

const SigninScreen = ({ navigation }) => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);
  // const navigation = useNavigation();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSignInButton = async () => {
    setIsAuthenticating(true);
    const { email, password } = values;
    if (!email || !password) {
      ToastAndroid.showWithGravity(
        "Enter valid email and password",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }
    try {
      const fetchData = async () => {
        try {
          const response = await axios.post(
            "http://192.168.0.161:3000/api/login_user",
            { email, password }
          );
          // printing the response
          console.log("Printing Response");
          console.log(response.data);

          // checking the response
          if (response.data.success) {
            const token = response.data.token;
            authCtx.authinticate(token);
          } else {
            ToastAndroid.showWithGravity(
              response.data.error,
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );
            setValues("");
          }
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchData();
    } catch (error) {
      console.log("Error during sign-in:", error.message);
      setIsAuthenticating(false);
    }
  };
  const signUpTextHandler = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={values.email}
          onChangeText={(text) => setValues({ ...values, email: text })}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={values.password}
          onChangeText={(text) => setValues({ ...values, password: text })}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignInButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.footerLink} onPress={signUpTextHandler}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    width: "80%",
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 16,
  },
  input: {
    fontSize: 16,
    padding: 8,
  },
  button: {
    width: "80%",
    backgroundColor: "#368dff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50,
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: "gray",
  },
  footerLink: {
    fontSize: 16,
    color: "#368dff",
    fontWeight: "bold",
  },
});

export default SigninScreen;
