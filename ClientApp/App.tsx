import React, {useContext} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthContext, AuthProvider} from './src/context/auth-context';
import CategoryScreen from './src/screens/CategoryScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import LoginScreen from './src/screens/LoginScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from './src/screens/ProfileScreen';
import ProductScreen from './src/screens/ProductScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import AddToCartScreen from './src/screens/AddToCartScreen';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

import CheckoutScreen from './src/screens/CheckoutScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const {userInfo} = useContext(AuthContext);

  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={CategoryScreen}
          options={() => ({
            headerTitle: `Welocme ${userInfo.user_name}`,
            headerRight: () => (
              <View style={styles.profileContainer}>
                <TouchableOpacity>
                  <Image
                    source={{
                      uri: 'https://imgs.search.brave.com/N72IIWeafbT_DvNz4aaU0wwnIuJTDq8FPdhxyXXYFS0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8zMTM1LzMxMzU3/MTUucG5n',
                    }}
                    style={styles.profileImage}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Category-Screen"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Our Products" component={ProductScreen} />
      <Stack.Screen name="Product Details" component={ProductDetailScreen} />
      <Stack.Screen name="AddToCart" component={AddToCartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="Login" component={AuthStack} options={{headerShown: false}} />

    </Stack.Navigator>
  );
};

export const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Log-In"
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Sign-Up"
      component={SignUpScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const Navigation = () => {
  const {isLoading, userToken} = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

const App = () => ( 
  <AuthProvider>
    <Provider store={store}>
      <Navigation />
    </Provider>
  </AuthProvider>
);

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 2,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
