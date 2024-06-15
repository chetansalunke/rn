import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ToastAndroid,
} from 'react-native';
import DropdownComponent from '../components/DropdownComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {ip} from '../components/ip';
const SignUpScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();
  const [error, setError] = useState({
    first_name: '',
    last_name: '',
    company_name: '',
    mobile_no: '',
    email: '',
    password: '',
    industry_type: '',
    register_as: '',
  });

  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    company_name: '',
    mobile_no: '',
    email: '',
    password: '',
    industry_type: '',
    register_as: '',
  });
  const data = [
    {label: 'Accounting', value: 'accounting'},
    {label: 'Advertising', value: 'advertising'},
    {label: 'Aerospace', value: 'aerospace'},
    {label: 'Agriculture', value: 'agriculture'},
    {label: 'Apparel', value: 'apparel'},
    {label: 'Automotive', value: 'automotive'},
    {label: 'Banking', value: 'banking'},
    {label: 'Biotechnology', value: 'biotechnology'},
    {label: 'Chemicals', value: 'chemicals'},
    {label: 'Communications', value: 'communications'},
    {label: 'Construction', value: 'construction'},
    {label: 'Consulting', value: 'consulting'},
    {label: 'Education', value: 'education'},
    {label: 'Electronics', value: 'electronics'},
    {label: 'Energy', value: 'energy'},
    {label: 'Engineering', value: 'engineering'},
    {label: 'Entertainment', value: 'entertainment'},
    {label: 'Environmental', value: 'environmental'},
    {label: 'Finance', value: 'finance'},
    {label: 'Food & Beverage', value: 'food_beverage'},
    {label: 'Government', value: 'government'},
    {label: 'Healthcare', value: 'healthcare'},
  ];

  const register_as = [
    {label: 'Seller', value: 'Seller'},
    {label: 'Buyer', value: 'Buyer'},
  ];

  const isValidMobileNumber = /^\d{10}$/.test(values.mobile_no);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handelSelectedValue = value => {
    setValues({...values, industry_type: value});
    if (error.industry_type) {
      setError('');
    }
  };
  const handelSelectedValue2 = value => {
    setValues({...values, register_as: value});
    if (error.industry_type) {
      setError('');
    }
  };

  const validation = () => {
    const newError = {};
    if (!values.first_name.trim()) {
      newError.first_name = 'Enter First Name';
    }
    if (!values.last_name.trim()) {
      newError.last_name = 'Enter Last Name';
    }
    if (!values.company_name.trim()) {
      newError.company_name = 'Enter Company Name';
    }
    const isValidMobileNumber = /^\d{10}$/;
    if (!values.mobile_no.trim()) {
      newError.mobile_no = 'Enter Mobile Number';
    } else if (!isValidMobileNumber.test(values.mobile_no.trim())) {
      newError.mobile_no = 'Invalid Mobile Number';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.trim()) {
      newError.email = 'Enter Email';
    } else if (!emailPattern.test(values.email.trim())) {
      newError.email = 'Invalid Email';
    }

    // Password Validation
    if (!values.password.trim()) {
      newError.password = 'Enter Password';
    } else if (values.password.trim().length < 6) {
      newError.password = 'Password must be at least 6 characters';
    }

    if (!values.industry_type.trim()) {
      newError.industry_type = 'Select Industry type';
    }
    if (!values.register_as.trim()) {
      newError.register_as = 'Select Register as';
    }

    setError(newError);

    // If there are no errors, submit the form
    if (Object.keys(newError).length === 0) {
      handelSubmitButton();
      setError('');
    }
  };
  const sendData = async () => {
    try {
      return await axios.post(
        `http://${ip}:3000/api/register`,
        values,
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handelSubmitButton = async () => {
    console.log(values);
    try {
      const response = await sendData();
      console.log(response.data);
      if (response.data.message === 'User already registered') {
        ToastAndroid.showWithGravity(
          'User already registered',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      } else {
        ToastAndroid.showWithGravity(
          'User registered successfully',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
        navigation.navigate('Log-In');
      }
    } catch (error) {
      console.log(response.data);
    }
  };
  const signInHandler = () => {
    navigation.navigate('Log-In');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign-Up with GreenGenX</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter First Name"
            value={values.first_name}
            onChangeText={text => {
              setValues({...values, first_name: text});
              if (error.first_name) {
                setError('');
              }
            }}
          />
          {error.first_name && (
            <Text
              style={{color: 'red', marginLeft: 8, alignItems: 'flex-start'}}>
              {error.first_name}
            </Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Last Name"
            value={values.last_name}
            onChangeText={text => {
              setValues({...values, last_name: text});
              // if there is any error then before after entering the name warning must be gone
              if (error.last_name) {
                setError('');
              }
            }}
          />
          {error.last_name && (
            <Text
              style={{color: 'red', marginLeft: 8, alignItems: 'flex-start'}}>
              {error.last_name}
            </Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Company Name"
            value={values.company_name}
            onChangeText={text => {
              setValues({...values, company_name: text});
              if (error.company_name) {
                setError('');
              }
            }}
          />
          {error.company_name && (
            <Text
              style={{color: 'red', marginLeft: 8, alignItems: 'flex-start'}}>
              {error.company_name}
            </Text>
          )}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, !isValidMobileNumber && styles.inputError]}
            placeholder="Enter Mobile Number"
            value={values.mobile_no}
            keyboardType="number-pad"
            onChangeText={text => {
              setValues({...values, mobile_no: text});
              if (error.mobile_no) {
                setError('');
              }
            }}
          />
          {error.mobile_no && (
            <Text
              style={{color: 'red', marginLeft: 8, alignItems: 'flex-start'}}>
              {error.mobile_no}
            </Text>
          )}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email"
            value={values.email}
            onChangeText={text => {
              setValues({...values, email: text});
              if (error.email) {
                setError('');
              }
            }}
          />
          {error.email && (
            <Text
              style={{color: 'red', marginLeft: 8, alignItems: 'flex-start'}}>
              {error.email}
            </Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter the Password"
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
          {error.password && (
            <Text
              style={{color: 'red', marginLeft: 8, alignItems: 'flex-start'}}>
              {error.password}
            </Text>
          )}
        </View>
        <View style={styles.inputContainer1}>
          <DropdownComponent
            data={data}
            placeholder="Industry Type"
            selectedValue={handelSelectedValue}
          />
          {error.industry_type && (
            <Text
              style={{color: 'red', marginLeft: 8, alignItems: 'flex-start'}}>
              {error.industry_type}
            </Text>
          )}
        </View>
        <View style={styles.inputContainer1}>
          <DropdownComponent
            data={register_as}
            placeholder="Register as"
            selectedValue={handelSelectedValue2}
          />
          {error.register_as && (
            <Text
              style={{color: 'red', marginLeft: 8, alignItems: 'flex-start'}}>
              {error.register_as}
            </Text>
          )}
        </View>
        <TouchableOpacity style={styles.button} onPress={validation}>
          <Text style={styles.buttonText}>SUMBIT</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.footerLink} onPress={signInHandler}>
              Sign-In
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
    marginBottom: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
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
});

export default SignUpScreen;
