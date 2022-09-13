import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";

interface SlideProps {
  title: string;
  image: string;
  right?: boolean;
  subtitle: string;
}
const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = height;

const Slide = ({ title, image, right, subtitle }: SlideProps) => {
  const styles = StyleSheet.create({
    container: {
      width: width,
    },
    title: {
      fontSize: right ? 55 : 45,
      fontFamily: "Rondal-BOLD",
      color: "white",
      textAlign: "center",
      letterSpacing: 5,
      position: "absolute",
      right: right ? 222 : -200,
    },
    titleContainer: {
      zIndex: 10,
      transform: [
        //    { translateY: SLIDE_HEIGHT / 2 },
        {
          translateX: right
            ? width / 2.2 - width * 0.15
            : -width / 2.2 + width * 0.15,
        },
        { rotate: right ? "-90deg" : "90deg" },
      ],
    },
  });

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image }}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Image
        source={require("../../assets/gradient.png")}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />
    </View>
  );
};

export default Slide;
