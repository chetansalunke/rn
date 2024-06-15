import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';


import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import { AuthContext } from '../context/auth-context';


const LoginScreen = () => {
  const {login} = useContext(AuthContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();
  const [error, setError] = useState({
    user_name: '',
    password: '',
  });

  const [values, setValues] = useState({
    user_name: '',
    password: '',
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validation = () => {
    const newError = {};
    if (!values.user_name.trim()) {
      newError.user_name = 'Enter Username';
    }

    // Password Validation
    if (!values.password.trim()) {
      newError.password = 'Enter Password';
    } else if (values.password.trim().length < 6) {
      newError.password = 'Password must be at least 6 characters';
    }

    setError(newError);

    // If there are no errors, submit the form
    if (Object.keys(newError).length === 0) {
      handelSubmitButton();
      setError('');
    }
  };
  
  const handelSubmitButton = async () => {
    try {
      const data = login(values);
    } catch (error) {
      console.log(error);
    }
  };
  const signInHandler = () => {
    navigation.navigate('Sign-Up');
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.title}>Log-In with GreenGenX</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Username"
            value={values.user_name}
            onChangeText={text => {
              setValues({...values, user_name: text});
              if (error.user_name) {
                setError('');
              }
            }}
          />
        </View>

        {error.user_name && (
          <View style={styles.errorMessageContainer}>
            <Text style={styles.errorMessage}>{error.user_name}</Text>
          </View>
        )}

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            accessibilityHint="#368dff"
            enterKeyHint="done"
            value={values.password}
            secureTextEntry={!passwordVisible}
            onChangeText={text => {
              setValues({...values, password: text});
              if (error.password) {
                setError('');
              }
            }}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={togglePasswordVisibility}>
            <Ionicons
              name={passwordVisible ? 'eye-off-outline' : 'eye-outline'}
              size={21}
              color="black"
            />
          </TouchableOpacity>
        </View>
        {error.password && (
          <View style={styles.errorMessageContainer}>
            <Text style={styles.errorMessage}>{error.password}</Text>
          </View>
        )}

        <TouchableOpacity style={styles.button} onPress={validation}>
          <Text style={styles.buttonText}>SUMBIT</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Create an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Sign-Up')}>
            <Text style={styles.footerLink} onPress={signInHandler}>
              Sign-Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  iconContainer: {
    position: 'absolute',
    marginTop: 16,
    marginRight: 12,
    right: 0,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    color: '#32CD32',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 12,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 3,
  },
  inputContainer1: {
    width: '80%',
  },
  dropdownContainer: {
    width: '80%',
    marginTop: 12,
  },
  input: {
    fontSize: 16,
    padding: 8,
  },
  button: {
    width: '80%',
    backgroundColor: '#32CD32',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: 'gray',
  },
  footerLink: {
    fontSize: 16,
    color: '#32CD32',
    fontWeight: 'bold',
  },
  errorMessageContainer: {
    alignSelf: 'flex-start',
    marginHorizontal: '10%',
  },
  errorMessage: {
    color: 'red',
    marginLeft: 8,
    alignItems: 'flex-start',
    marginBottom: 18,
  },
});

export default LoginScreen;
