import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/Onboarding";
import RegistrationOptions from "../screens/RegistrationOptions";
import Home from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile/Profile";
import Register from "../screens/Auth/Register";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../constants/colors";
import ProfileStack from "./stacks/ProfileStack";
import Login from "../screens/Auth/Login";
import useAuth from "../hooks/auth/useAuth";

const TabNavigator = createBottomTabNavigator();
const StackNavigator = createNativeStackNavigator();
const ICON_SIZE = 29;

const TabStack = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.beige,
        tabBarInactiveTintColor: "#f5ebe0",
        tabBarShowLabel: false,
        tabBarStyle: {
          // height: 70,
          position: "absolute",
          backgroundColor: Colors.semiTransparent1,
          shadowColor: "transparent",
        },
      }}
    >
      <TabNavigator.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: "Home",

          tabBarIcon: ({ focused, color, size }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={{ color: focused ? "#f0ead2" : Colors.white }}
            >
              <Ionicons
                color={color}
                name={focused ? "home" : "home-outline"}
                size={ICON_SIZE}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <TabNavigator.Screen
        name="Search"
        component={Profile}
        options={({ navigation }) => ({
          title: "Profile",
          tabBarIcon: ({ focused, color, size }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Search")}
              style={{ color: focused ? "#f0ead2" : Colors.white }}
            >
              <Ionicons
                color={color}
                name={focused ? "search" : "search-outline"}
                size={ICON_SIZE}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <TabNavigator.Screen
        name="Chat"
        component={Profile}
        options={({ navigation }) => ({
          title: "Chat",
          tabBarIcon: ({ focused, color, size }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Chat")}
              style={{ color: focused ? "#f0ead2" : Colors.white }}
            >
              <Ionicons
                color={color}
                name={focused ? "chatbubbles" : "chatbubbles-outline"}
                size={ICON_SIZE}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <TabNavigator.Screen
        name="Profile"
        component={ProfileStack}
        options={({ navigation }) => ({
          title: "Profile",
          tabBarIcon: ({ focused, color, size }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Profile")}
              style={{ color: focused ? "#f0ead2" : Colors.white }}
            >
              <Ionicons
                color={color}
                name={focused ? "person-circle" : "person-circle-outline"}
                size={ICON_SIZE}
              />
            </TouchableOpacity>
          ),
        })}
      />
    </TabNavigator.Navigator>
  );
};

const Navigation = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!user && (
          <>
            <StackNavigator.Screen name="Onboarding" component={Onboarding} />
            <StackNavigator.Screen
              name="Registration"
              component={RegistrationOptions}
            />
            <StackNavigator.Screen
              name="Register"
              component={Register}
              options={{
                animation: "slide_from_right",
              }}
            />
            <StackNavigator.Screen
              name="Login"
              component={Login}
              options={{
                animation: "slide_from_right",
              }}
            />
          </>
        )}
        <StackNavigator.Screen name="App" component={TabStack} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
