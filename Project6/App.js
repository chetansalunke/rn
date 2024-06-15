import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignupScreen from "./screens/SignupScreen";
import { useImperativeHandle } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SigninScreen from "./screens/SigninScreen";
import AllCategoryScreen from "./screens/AllCategoryScreen";
import ProductScreen from "./screens/ProductScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddtoCartScreen from "./screens/AddtoCartScreen";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Ionicons } from "react-native-vector-icons";
import OurMaidScreen from "./screens/OurMaid";
import BookingScreen from "./screens/BookingScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerTintColor: "black",

        //Bottom tabbar color
      

        //tab varache items cha color
        tabBarActiveTintColor: "#424b4b",

       
      })}
    >
      <BottomTabs.Screen
        name="Home"
        component={AllCategoryScreen}
        options={{
          title: "Home",
          tabBarLabel: "Home",

          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),

        }}
      />
      <BottomTabs.Screen
        name="Maids"
        component={OurMaidScreen}
        options={{
          title: "Our Maids",
          tabBarLabel: "Our Maids",

          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'home' : 'woman-outline'}
              size={size}
              color={color}
            />
          ),

        }}
      />
      <BottomTabs.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          title: "Book Maid",
          tabBarLabel: "Book Maid",

          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'home' : 'calendar-outline'}
              size={size}
              color={color}
            />
          ),

        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarLabel: "Profile",

          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'home' : 'person-outline'}
              size={size}
              color={color}
            />
          ),

        }}
      />
      
     
    </BottomTabs.Navigator>
  );
}


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="BottomNavigation"
          component={BottomNavigation}
          options={{ headerShown: false }}
        />
          
          
          <Stack.Screen name="Product" component={ProductScreen} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
          <Stack.Screen name="AddToCart" component={AddtoCartScreen} />
         
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
