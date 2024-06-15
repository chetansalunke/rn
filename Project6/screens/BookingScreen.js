// const BookingScreen=()=>{

// }

// export default BookingScreen;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const BookingScreen = () => {
    const [service, setService] = useState('');
    const [location, setLocation] = useState('');
    const [time, setTime] = useState('');
  
    const services = [
      { label: 'Cleaning', value: 'cleaning' },
      { label: 'Cooking', value: 'cooking' },
      { label: 'Babysitting', value: 'babysitting' },
      // Add more services as needed
    ];
  
    const locations = [
      { label: 'Living Room', value: 'living-room' },
      { label: 'Kitchen', value: 'kitchen' },
      { label: 'Bedroom', value: 'bedroom' },
      // Add more locations as needed
    ];
  
    const times = [
      { label: 'Morning', value: 'morning' },
      { label: 'Afternoon', value: 'afternoon' },
      { label: 'Evening', value: 'evening' },
      // Add more times as needed
    ];
  
    const handleContinue = () => {
      // Handle the continue action
      console.log('Continue button pressed');
      console.log('Selected Service:', service);
      console.log('Selected Location:', location);
      console.log('Selected Time:', time);
      // Add your navigation logic or further processing here
    };
  
    return (
     <View style={styles.container}>
  <DropDownPicker
    items={services}
    placeholder="Select Service"
    containerStyle={styles.dropdownContainer}
    style={styles.dropdown}
    itemStyle={styles.dropdownItem}
    dropDownStyle={styles.dropdownList}
    onChangeItem={(item) => setService(item.value)}
    zIndex={9999}
  />

  <DropDownPicker
    items={locations}
    placeholder="Select Location"
    containerStyle={styles.dropdownContainer}
    style={styles.dropdown}
    itemStyle={styles.dropdownItem}
    dropDownStyle={styles.dropdownList}
    onChangeItem={(item) => setLocation(item.value)}
    zIndex={9998}
  />

  <DropDownPicker
    items={times}
    placeholder="Select Time"
    containerStyle={styles.dropdownContainer}
    style={styles.dropdown}
    itemStyle={styles.dropdownItem}
    dropDownStyle={styles.dropdownList}
    onChangeItem={(item) => setTime(item.value)}
    zIndex={9997}
  />

  <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
    <Text style={styles.buttonText}>Continue</Text>
  </TouchableOpacity>
</View>

    );
  };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
