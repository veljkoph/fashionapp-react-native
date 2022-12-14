import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../../constants/colors";

const TransparentInput = (props) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.label}>{props.label}</Text>
          {props.touched && props.error && (
            <Text style={styles.error}>{props.error}</Text>
          )}
        </View>

        {props.password && (
          <TouchableOpacity
            style={styles.passwordToggle}
            onPress={() => setIsHidden(!isHidden)}
          >
            <Ionicons
              name={isHidden ? "eye-outline" : "eye-off-outline"}
              size={24}
              color={Colors.grayLight}
            />
          </TouchableOpacity>
        )}

        <TextInput
          multiline={props.multiline}
          numberOfLines={props.numberOfLines}
          onChangeText={props.onChangeText}
          value={props.value}
          style={styles.input}
          secureTextEntry={props.password && isHidden}
          onBlur={props.onBlur}
          editable={props.editable}
          keyboardType={props.keyboardType}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 28,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.grayLight,
    height: 55,
    fontSize: 22,
    color: Colors.grayLight,
    fontFamily: "Cormorant-Bold",
    paddingLeft: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 8,
    color: Colors.grayLight,
    fontFamily: "Cormorant-Bold",
  },
  error: {
    fontSize: 20,
    marginBottom: 8,
    color: Colors.beige,
    fontFamily: "Cormorant-Bold",
  },
  passwordToggle: {
    position: "absolute",
    bottom: 15,
    right: 15,
    zIndex: 10,
  },
});

export default TransparentInput;
