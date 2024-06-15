import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

const CheckoutScreen = () => {
  const [address, setAddress] = useState('');
  const route = useRoute();

  const totalItems = route.params.totalItems;
  const totalPrice = route.params.totalPrice;

  const handleConfirmOrder = () => {
    alert('Order confirmed!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Delivery Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your address"
        value={address}
        onChangeText={setAddress}
      />
      <View style={styles.summaryContainer}>
        <Text style={[styles.summaryText, styles.boldText]}>Order Summary</Text>
        <Text style={styles.summaryText}>Total Items: {totalItems}</Text>
        <Text style={styles.summaryText}>Total Bill: ${totalPrice}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleConfirmOrder}>
        <Text style={styles.buttonText}>Confirm Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#3498db',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  summaryContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  summaryText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  boldText: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#228B22',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
