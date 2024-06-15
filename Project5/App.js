import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignupScreen from "./screens/SignupScreen";
import { useContext, useEffect, useImperativeHandle } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SigninScreen from "./screens/SigninScreen";
import AllCategoryScreen from "./screens/AllCategoryScreen";
import ProductScreen from "./screens/ProductScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddtoCartScreen from "./screens/AddtoCartScreen";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store/store";
import { addMyProducts } from "./store/MyproductSlice";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) {
        authCtx.authinticate(storedToken);
      }
      console.log("Store Token");
      console.log(storedToken);
    };
    fetchToken();
  }, []);
  
  return (
    <NavigationContainer>
      {authCtx.isAuthinticated ? (
        <Stack.Navigator>
          <Stack.Screen name="All Category" component={AllCategoryScreen} />
          <Stack.Screen name="Product" component={ProductScreen} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
          <Stack.Screen name="AddToCart" component={AddtoCartScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SigninScreen} />
          <Stack.Screen name="SignUp" component={SignupScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <AuthContextProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </AuthContextProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});