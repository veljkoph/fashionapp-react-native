import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/colors";
import { WIDTH } from "../../constants/dimensions";
import Ionicons from "react-native-vector-icons/Ionicons";

const ListItem = ({ video }) => {
  return (
    <TouchableOpacity>
      <Image
        source={{ uri: video.uri }}
        style={style.thumbnail}
        resizeMode="cover"
      />
      <Image
        style={style.gradient}
        source={require("../../assets/global/gradient.png")}
        resizeMode="cover"
      />
      <View style={style.stats}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons color={"white"} name={"heart"} size={24} />
          <Text style={style.likesText}>123</Text>
        </View>
        <View style={style.categories}>
          {video?.tags?.map((c, index) => (
            <View key={index} style={style.category}>
              <Text style={style.categoryText}>{c}</Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  description: {
    fontSize: 14,
    marginTop: 10,
    fontFamily: "Cabin-Regular",
    color: Colors.grayLight,
    letterSpacing: 0.3,
  },

  thumbnail: {
    height: 350,
    width: WIDTH / 2,
  },
  stats: {
    position: "absolute",
    bottom: 10,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 10,
    width: "100%",
    paddingRight: 20,
  },
  likesText: {
    fontFamily: "Cabin-Regular",
    color: Colors.grayLight,
    fontSize: 12,
    marginLeft: 6,
  },
  categories: {},
  category: {
    borderWidth: 1,
    borderColor: Colors.grayLight,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginHorizontal: 4,
  },
  categoryText: {
    color: Colors.grayLight,
    fontFamily: "Cabin-Regular",
    fontSize: 12,
  },
  gradient: {
    position: "absolute",
  },
});
export default ListItem;
