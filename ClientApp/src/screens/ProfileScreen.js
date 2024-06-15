import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AuthContext } from '../context/auth-context';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { logout } = useContext(AuthContext);
  
  const onPress = () => {
    AsyncStorage.removeItem('userInfo');
    AsyncStorage.removeItem('userToken');
    navigation.replace('Login');
  };

  return (
    <View style={{ padding: 18, alignItems: 'center' }}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    padding: 18,
    backgroundColor: 'rgb(63, 212, 250)',
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: '800',
    color: 'white',
  },
});

export default ProfileScreen;
