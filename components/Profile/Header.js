import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Colors } from "../../constants/colors";
import Statistics from "./Statistics";

const Header = () => {
  return (
    <View style={style.container}>
      <View style={style.profileInfo}>
        <View style={style.descriptionContainer}>
          <Text style={style.username}>@larasoft</Text>
          <Text style={style.description}>
            Fashion is a form of self-expression and autonomy at a particular
            period and place
          </Text>
        </View>
        <Image
          style={style.profilePicture}
          resizeMethod="cover"
          source={{
            uri: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />
      </View>
      <Statistics />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  username: {
    fontSize: 45,
    fontFamily: "Cormorant-Bold",
    color: Colors.grayLight,
    letterSpacing: 1,
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    fontFamily: "Cabin-Regular",
    color: Colors.grayLight,
    letterSpacing: 0.3,
  },
  profileInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  descriptionContainer: {
    flex: 0.9,
    flexDirection: "column",
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 150 / 2,
    borderWidth: 2,
    borderColor: Colors.grayLight,
  },
});

export default Header;
