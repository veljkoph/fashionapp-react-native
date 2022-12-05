import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
const { width, height } = Dimensions.get("window");
const Actions = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <View style={{ position: "absolute", bottom: height * 0.2, right: 15 }}>
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
      <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
        <Ionicons
          color={isLiked ? "#ffe8d6" : "white"}
          name="share-social-outline"
          size={35}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Actions;
