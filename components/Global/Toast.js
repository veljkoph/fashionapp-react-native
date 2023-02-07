import { View, Text } from "react-native";
import React from "react";
import { Colors } from "../../constants/colors";
import Ionicons from "react-native-vector-icons/Ionicons";

const Toast = ({ options }) => {
  return (
    <View
      style={{
        width: "90%",
        backgroundColor: Colors.grayLight,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {options.type === "success" && (
        <View>
          <Ionicons color={"green"} name={"checkmark-circle-sharp"} size={32} />
        </View>
      )}
      {options.type === "warning" && (
        <View>
          <Ionicons color={Colors.beige} name={"warning"} size={32} />
        </View>
      )}
      {options.type === "danger" && (
        <View>
          <Ionicons color={"red"} name={"warning"} size={32} />
        </View>
      )}

      <Text>{options.message}</Text>
    </View>
  );
};

export default Toast;
