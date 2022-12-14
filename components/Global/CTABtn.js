import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/colors";

const CTABtn = ({ text, f }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => f()}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.beige,
    paddingVertical: 11,
    paddingHorizontal: 20,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    borderColor: Colors.grayLight,
    borderWidth: 1,
  },
  text: {
    fontSize: 28,
    color: Colors.grayLight,
    fontFamily: "Cormorant-Bold",
  },
});

export default CTABtn;
