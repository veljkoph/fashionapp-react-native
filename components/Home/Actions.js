import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../../constants/colors";
const { width, height } = Dimensions.get("window");

const Actions = ({ uri, category, text }) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <View
      style={{
        position: "absolute",
        bottom: height * 0.12,
        right: 15,
        alignItems: "flex-end",
        width: width - 15,
        zIndex: 3,
      }}
    >
      <TouchableOpacity
        // onPress={() => setIsLiked(!isLiked)}
        style={{ marginBottom: 30 }}
      >
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711&q=80",
          }}
          style={{ height: 35, width: 35, borderRadius: 50 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setIsLiked(!isLiked)}
        style={{ marginBottom: 30 }}
      >
        <Ionicons
          color={isLiked ? "#ffe8d6" : "white"}
          name={isLiked ? "heart" : "heart-outline"}
          size={35}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons
          color={isLiked ? "#ffe8d6" : "white"}
          name="share-social-outline"
          size={35}
        />
      </TouchableOpacity>
      <View
        style={{
          //   backgroundColor: "#rgba(47, 47, 47, 0.11)",
          width: "100%",
          bottom: 0,
          height: "100%",
          paddingLeft: 15,
          alignSelf: "flex-start",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Cabin-Regular",
            color: Colors.grayLight,
            letterSpacing: 0.3,
          }}
        >
          {text}
        </Text>
        <View style={{ flexDirection: "row" }}>
          {category?.map((c, index) => (
            <TouchableOpacity
              key={index}
              style={{
                borderWidth: 1,
                borderColor: "#FFF",
                paddingHorizontal: 10,
                paddingVertical: 5,
                marginRight: 10,
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,

                  fontFamily: "Cabin-Regular",
                  color: Colors.grayLight,
                  letterSpacing: 0.3,
                }}
              >
                {c}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Actions;
