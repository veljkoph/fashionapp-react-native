import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Colors } from "../../constants/colors";
import Statistics from "./Statistics";

const Header = ({ user }) => {
  return (
    <View style={style.container}>
      <View style={style.profileInfo}>
        <View style={style.descriptionContainer}>
          <Text style={style.username}>{user?.username}</Text>
          <Text style={style.description}>{user?.description}</Text>
        </View>
        <Image
          style={style.profilePicture}
          resizeMode="cover"
          source={{
            uri: user?.avatar,
          }}
        />
      </View>
      <Statistics
        following={user?.following?.length}
        followers={user?.followers?.length}
        userId={user?._id}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  username: {
    fontSize: 40,
    fontFamily: "Cormorant-Bold",
    color: Colors.grayLight,
    letterSpacing: 1,
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    fontFamily: "Cabin-Regular",
    color: Colors.grayLight,
    letterSpacing: 0.2,
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
