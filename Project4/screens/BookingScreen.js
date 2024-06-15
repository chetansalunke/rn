import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import DropdownComponent from '../components/ui/DropdownComponent';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

const BookingScreen = () => {
  const [selectedValues, setSelectedValues] = useState({
    locations: '',
    services: '',
    times: '',
  });

  const services = [
    { label: 'Cleaning', value: 'cleaning' },
    { label: 'Cooking', value: 'cooking' },
    { label: 'Babysitting', value: 'babysitting' },
    { label: 'Elder Care', value: 'eldercare' },
    { label: 'Japa Maid', value: 'japamaid' },
    { label: 'Pet Care', value: 'petcare' },
   
  ];

  const locations = [
    { label: 'Shivaji Nagar', value: 'Shivaji Nagar'},
    { label: 'Baner', value: 'Baner' },
    { label: 'Bhukum', value: 'Bhukum' },
    { label: 'Balewadi', value: 'Balewadi' },
    { label: 'Hinjewadi', value: 'Hinjewadi' },
    { label: 'Kothrud', value: 'Kothrud' },
  ];

  const times = [
    { label: 'Morning', value: 'morning' },
    { label: 'Afternoon', value: 'afternoon' },
    { label: 'Evening', value: 'evening' },
  ];

  const handleContinue = () => {
    console.log("Selected value");
    console.log(selectedValues);
    Alert.alert("Booking Done!")
    setSelectedValues({
      locations: '',
      services: '',
      times: '',
    });
  };
  const handleDropdownChange = (key,selectedValue) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [key]: selectedValue,
    }));
    
  };

  return (
    <View style={styles.container}>
      
    <DropdownComponent data={locations} value={selectedValues.locations} placeholder="Select Location" onValueChange={(selectedValue) => handleDropdownChange('locations', selectedValue)}/>
    <DropdownComponent data={services} value={selectedValues.services}  placeholder="Select Service" onValueChange={(selectedValue) => handleDropdownChange('services', selectedValue)}/>
    <DropdownComponent data={times}  value={selectedValues.times}  placeholder="Select Time" onValueChange={(selectedValue) => handleDropdownChange('times', selectedValue)}/>


      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   marginTop:180,
   padding:12,
   backgroundColor:'#fff'
  },
  dropdownContainer: {
    width: '80%',
    marginBottom: 20,
  },
  dropdown: {
    backgroundColor: '#fafafa',
  },
  dropdownItem: {
    justifyContent: 'flex-start',
  },
  dropdownList: {
    backgroundColor: '#fafafa',
  },
  continueButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
export default BookingScreen;

