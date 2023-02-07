import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constants/colors";
import Animated, { FadeIn } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import useFollow from "../../hooks/profile/useFollow";

const FollowingErs = ({ id, username, image, following, index }) => {
  const [isFollowing, setIsFollowing] = useState(following);
  const navigation = useNavigation();

  const { mutate: follow, isError } = useFollow();

  const followBtnHandler = () => {
    follow(id);
    setIsFollowing(!isFollowing);
  };

  return (
    <TouchableOpacity
      style={style.container}
      onPress={() => {
        navigation.replace("UsersProfile", {
          userId: id,
          otherParam: "Hi",
        });
      }}
      entering={FadeIn.duration(200 * index)}
    >
      <View style={style.imageusernameContainer}>
        <Image
          source={{ uri: image }}
          style={[
            style.img,
            { borderWidth: image ? 0 : 1, borderColor: Colors.beige },
          ]}
          resizeMode="cover"
        />
        <Text style={style.username}>{username}</Text>
      </View>

      <TouchableOpacity
        style={style.followingBtn}
        onPress={() => followBtnHandler()}
      >
        <Text style={style.followingText}>
          {/* {isFollowing ? "Following" : "Follow"} */} F
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
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
