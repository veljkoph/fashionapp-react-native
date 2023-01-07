import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constants/colors";
import Animated, { FadeIn } from "react-native-reanimated";

const FollowingErs = ({ username, image, following, index }) => {
  const [isFollowing, setIsFollowing] = useState(following);

  return (
    <Animated.View
      style={style.container}
      entering={FadeIn.duration(200 * index)}
    >
      <View style={style.imageusernameContainer}>
        <Image source={{ uri: image }} style={style.img} resizeMode="cover" />
        <Text style={style.username}>{username}</Text>
      </View>

      <TouchableOpacity
        style={style.followingBtn}
        onPress={() => setIsFollowing(!isFollowing)}
      >
        <Text style={style.followingText}>
          {isFollowing ? "Following" : "Follow"}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
const style = StyleSheet.create({
  container: {
    borderBottomColor: Colors.grayLight,
    borderBottomWidth: 0.5,
    marginHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageusernameContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 20,
  },
  username: {
    fontSize: 15,
    fontFamily: "Cabin-Regular",
    color: Colors.grayLight,
    letterSpacing: 0.4,
  },
  followingBtn: {
    borderWidth: 0.5,
    borderColor: Colors.grayLight,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  followingText: {
    fontSize: 14,
    fontFamily: "Cabin-Regular",
    color: Colors.grayLight,
    letterSpacing: 0,
  },
});

export default FollowingErs;
