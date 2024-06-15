import React, { useContext } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Header } from '@react-navigation/stack';
import { AuthContext } from '../context/auth-context';

const CustomHeader = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <Header style={styles.header}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'images\profile.png' }} // Replace with your profile image URI
          style={styles.profileImage}
        />
        <Text style={styles.userName}>{userInfo.user_name}</Text>
      </View>
    </Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff', // Customize the background color of the header
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40, // Adjust as needed
    height: 40, // Adjust as needed
    borderRadius: 20, // Adjust as needed to make it circular
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CustomHeader;
