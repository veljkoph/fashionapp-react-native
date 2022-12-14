import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/Onboarding";
import Registration from "../screens/Registration";
import Home from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile/Profile";
import Register from "../screens/Auth/Register";

const TabNavigator = createBottomTabNavigator();
const StackNavigator = createNativeStackNavigator();

const TabStack = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { position: "absolute", backgroundColor: "#2F2F2F" },
      }}
    >
      <TabNavigator.Screen name="Home" component={Home} />
      <TabNavigator.Screen name="Profile" component={Profile} />
    </TabNavigator.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { position: "absolute", backgroundColor: "#2F2F2F" },
        }}
      >
        <StackNavigator.Screen name="Onboarding" component={Onboarding} />
        <StackNavigator.Screen name="Registration" component={Registration} />
        <StackNavigator.Screen name="Register" component={Register} />
        <StackNavigator.Screen name="App" component={TabStack} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
