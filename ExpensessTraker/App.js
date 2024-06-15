import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import MainExpenseScreen from "./screens/MainExpenseScreen";
import RecentExpenseScreen from "./screens/RecentExpenseScreen";
import AllExpenseScreen from "./screens/AllExpenseScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GlobalStyles } from "./constants/styles";
import IconButton from "./UI/IconButton";
import ExpensesContextProvider from "./store/expenses-context";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.color1 },
        headerTintColor: "black",

        //Bottom tabbar color
        tabBarStyle: { backgroundColor: GlobalStyles.colors.color1 },

        //tab varache items cha color
        tabBarActiveTintColor: "#424b4b",

        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={28}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageExpenseScreen");
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenseScreen}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",

          // it return a function and accept the props

          tabBarIcon: ({ color, size }) => (
            // Use parentheses to wrap the JSX for implicit return (Tip)
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenseScreen}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",

          // it return a function and accept the props
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
   <ExpensesContextProvider>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: GlobalStyles.colors.color1 },
          headerTintColor: "black",

          //Bottom tabbar color
          tabBarStyle: { backgroundColor: GlobalStyles.colors.color1 },

          //tab varache items cha color
          tabBarActiveTintColor: "#424b4b",
        }}
      >
        <Stack.Screen
          name="ExpensesOverview"
          component={ExpensesOverview}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ManageExpenseScreen"
          component={MainExpenseScreen}
          options={{
            presentation: "modal",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </ExpensesContextProvider>
   
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
