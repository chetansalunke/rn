import { useNavigation } from "@react-navigation/native";

import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import createUser from "../util/auth";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignupScreen = ({ navigation }) => {
  const [values, setValues] = useState({
    user_name: "",
    mobile_no: "",
    email: "",
    password: "",
  });

  async function handleSignUp() {
    try {
      const response = await axios.post('http://192.168.0.161:3000/api/register',values);
      const token = response.data.token;
      await AsyncStorage.setItem('token', token);
      console.log('token is store in the async storage', token);
    } catch (error) {
      console.error("Sign up failed:", error.message);
    }
  }
  const signInHandler = () => {
    navigation.navigate("SigIn");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={values.user_name}
          onChangeText={(text) => {
            return setValues({ ...values, user_name: text });
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          value={values.mobile_no}
          keyboardType="number-pad"
          onChangeText={(text) => {
            return setValues({ ...values, mobile_no: text });
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={values.email}
          onChangeText={(text) => {
            return setValues({ ...values, email: text });
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          accessibilityHint="#368dff"
          enterKeyHint="done"
          value={values.password}
          onChangeText={(text) => setValues({ ...values, password: text })}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.footerLink} onPress={signInHandler}>
            Sign In
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

export default SignupScreen;
