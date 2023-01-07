import { View, Text } from "react-native";
import React from "react";
import Profile from "../../screens/Profile/Profile";
import Following from "../../screens/Profile/Following";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen
        name="FollowingScreen"
        component={Following}
        options={{
          animation: "slide_from_right",
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
