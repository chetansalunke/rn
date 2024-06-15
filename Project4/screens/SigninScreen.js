import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Category from "../models/category";

const SigninScreen = ({navigation}) => {
//   const navigation = useNavigation();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSignInButton = async() => {
    try{
      const email = values.email;
      const password = values.password

      if(email && password){
        await login(email,password);
        navigation.navigate('All Category');
      }
      else{
        console.log("Enter Valid email & password");
      }
   
    }
    catch(error){
      console.log(error.message);
    }
    
    navigation.navigate("All Category");
  };
  const signUpTextHandler = () => {
    navigation.replace("SignUp");
  };
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
