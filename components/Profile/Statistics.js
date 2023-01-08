import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import useFollowers from "../../hooks/profile/useFollowers";
import useFollowing from "../../hooks/profile/useFollowing";

const Statistics = ({
  following: followingLength,
  followers: followersLenght,
}) => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={[style.statContainer]}>
        <Text style={style.text}>Posts</Text>
        <Text style={style.number}>11</Text>
      </View>
      <View style={style.line} />
      <TouchableOpacity
        onPress={() => navigation.navigate("FollowingScreen")}
        style={style.statContainer}
      >
        <Text style={style.text}>Following</Text>
        <Text style={style.number}>{followingLength}</Text>
      </TouchableOpacity>
      <View style={style.line} />
      <TouchableOpacity
        onPress={() => navigation.navigate("FollowersScreen")}
        style={style.statContainer}
      >
        <Text style={style.text}>Followers</Text>
        <Text style={style.number}>{followersLenght}</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 25,
    marginBottom: 25,
    justifyContent: "space-between",
    flexDirection: "row",
    // backgroundColor: "blue",
  },
  text: {
    fontSize: 17,
    fontFamily: "Cormorant-Regular",
    color: "#FFF",
    letterSpacing: 0,
  },
  number: {
    fontSize: 15,
    fontFamily: "Cabin-Regular",
    color: "#FFF",
    letterSpacing: 1,
  },
  statContainer: {
    alignItems: "center",
    flex: 0.3,
  },
  line: {
    borderWidth: 0.5,
    borderColor: Colors.grayLight,
  },
});

export default Statistics;
