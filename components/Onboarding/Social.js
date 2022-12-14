import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Social = (props) => {
  const navigation = useNavigation();
  //      onPress={() => navigation.navigate("App", { screen: "Home" })}
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
      <View style={styles.container}>
        <Image resizeMode="contain" style={styles.image} source={props.image} />
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <View style={[styles.absoluteContainer]}>
        <Image
          resizeMode="contain"
          style={[styles.image, styles.hidden]}
          source={props.image}
        />
        <Text style={[styles.text, styles.hidden]}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  absoluteContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "white",
    width: "100%",

    paddingHorizontal: 10,
    paddingVertical: 10,
    position: "absolute",

    zIndex: 0,
    left: 5,
    top: 5,
  },
  container: {
    backgroundColor: "#2F2F2F",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "white",
    width: "100%",

    paddingHorizontal: 10,
    paddingVertical: 10,
    position: "relative",
    zIndex: 2,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontFamily: "Cabin-Regular",
    marginLeft: "10%",
  },
  image: {
    width: 40,
    height: 40,
  },
  hidden: {
    opacity: 0,
  },
});
export default Social;
