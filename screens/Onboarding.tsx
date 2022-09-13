import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Slide from "../components/Onboarding/Slide";
import { SLIDE_HEIGHT } from "../components/Onboarding/Slide";
import Animated from "react-native-reanimated";

import { data } from "../data";
import Footer from "../components/Onboarding/Footer";

const shuffle = (data: any) => [...data].sort(() => Math.random() - 0.5);
const { width } = Dimensions.get("window");

const Onboarding = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [activeSlide, setActiveSlide] = useState<number>(1);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider]}>
        <ScrollView
          horizontal
          directionalLockEnabled={true}
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={true}
          bounces={false}
          scrollEventThrottle={21}
          onMomentumScrollEnd={(event) =>
            setActiveSlide(event.nativeEvent.contentOffset.x / width + 1)
          }
        >
          {data.map(({ title, image, subtitle, id }) => (
            <Slide key={id} right={!(id % 2)} {...{ title, image, subtitle }} />
          ))}
        </ScrollView>
        <Footer activeSlide={activeSlide} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
  },
});

export default Onboarding;
