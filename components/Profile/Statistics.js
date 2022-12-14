import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../constants/colors";

const Statistics = () => {
  return (
    <View style={style.container}>
      <View style={[style.statContainer]}>
        <Text style={style.text}>Posts</Text>
        <Text style={style.number}>11</Text>
      </View>
      <View style={style.line} />
      <View style={style.statContainer}>
        <Text style={style.text}>Following</Text>
        <Text style={style.number}>124</Text>
      </View>
      <View style={style.line} />
      <View style={style.statContainer}>
        <Text style={style.text}>Followers</Text>
        <Text style={style.number}>133</Text>
      </View>
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
    flex: 0.2,
  },
  line: {
    borderWidth: 0.5,
    borderColor: Colors.grayLight,
  },
});

export default Statistics;
