import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
const HeaderWIthTitle = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons
          color={Colors.grayLight}
          name="chevron-back-outline"
          size={40}
        />
      </TouchableOpacity>

      <Text style={style.title}>{title}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontFamily: "Cormorant-Bold",
    color: Colors.grayLight,
    letterSpacing: 1,
  },
});
export default HeaderWIthTitle;
