import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React, { useRef, useState } from "react";
import { Video, AVPlaybackStatus } from "expo-av";
import Actions from "./Actions";

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = height;

const Player = ({ url, activeSlide, id }) => {
  const [status, setStatus] = React.useState({});
  const video = React.useRef(null);
  const styles = StyleSheet.create({
    container: {
      width: width,
      height: height,
    },
  });

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={{ height: height }}
        source={{
          uri: url,
        }}
        useNativeControls={false}
        resizeMode="cover"
        isLooping
        shouldPlay={activeSlide == id}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <Actions />
    </View>
  );
};

export default Player;
