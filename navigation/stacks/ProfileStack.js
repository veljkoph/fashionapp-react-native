import React from "react";
import MyProfile from "../../screens/Profile/MyProfile";
import Following from "../../screens/Profile/Following";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Followers from "../../screens/Profile/Followers";
import Profile from "../../screens/Profile/Profile";
const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="MyProfile"
        options={{
          animation: "none",
        }}
        component={MyProfile}
      />
      <Stack.Screen
        options={{
          animation: "none",
        }}
        name="UsersProfile"
        component={Profile}
      />
      <Stack.Screen
        name="FollowingScreen"
        component={Following}
        options={{
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="FollowersScreen"
        component={Followers}
        options={{
          animation: "slide_from_right",
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
