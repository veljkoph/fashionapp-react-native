import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React, { useRef, useState } from "react";
import { Video, AVPlaybackStatus } from "expo-av";
import Actions from "./Actions";
import { Colors } from "../../constants/colors";
import FashionLoader from "../../screens/Global/FashionLoader";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = height;

const Player = ({ url, activeSlide, id, image, index, video }) => {
  const [status, setStatus] = React.useState({});
  const videoRef = React.useRef(null);

  const styles = StyleSheet.create({
    container: {
      width: width,
      height: height,
      backgroundColor: Colors.background,
    },
  });
  // if (!status?.isLoaded) return <FashionLoader />;
  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={{ height: height }}
        source={{
          uri: url,
        }}
        useNativeControls={false}
        resizeMode="cover"
        isLooping
        shouldPlay={activeSlide == index + 1}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <LinearGradient
        // Background Linear Gradient
        colors={["transparent", "rgba(70,63,58,1)"]}
        locations={[0.7, 1]}
        style={{
          flex: 1,
          position: "absolute",
          zIndex: 2,
          height: "100%",
          width: "100%",
        }}
      />
      <Actions
        uri={image}
        text={video?.description}
        category={video.category}
      />
    </View>
  );
};

export default Player;
