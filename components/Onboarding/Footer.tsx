import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { data } from "../../data";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

type Props = {
  activeSlide: number;
};

const Footer = (props: Props) => {
  const navigation = useNavigation();

  const sliderIndicatorStyle = (id: number) =>
    useAnimatedStyle(() => {
      return {
        width: withTiming(id === props.activeSlide ? 40 : 17, {
          duration: 300,
        }),
        height: 2,
        margin: 5,
        borderRadius: 50,
        backgroundColor: withTiming(
          id === props.activeSlide ? "#a98467" : "#fefefe"
        ),
      };
    });
  return (
    <View
      style={{
        position: "absolute",
        bottom: "12%",
        right: "10%",
        alignItems: "flex-end",
        justifyContent: "flex-end",
      }}
    >
      <Text style={styles.text}>Get Started</Text>
      <View style={styles.dots}>
        {data.map((slide) => (
          <Animated.View
            key={slide.id}
            style={sliderIndicatorStyle(slide.id)}
          ></Animated.View>
        ))}
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Registration")}
      >
        <Ionicons name="chevron-forward-outline" size={31} color="white" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 44,
    color: "#a98467",
    fontFamily: "MeshedDisplay-SemiBold",
    letterSpacing: 2,
  },
  btn: {
    backgroundColor: "#a98367",
    alignSelf: "flex-end",
    padding: 20,
    borderRadius: 50,
    marginTop: 20,
  },
  dots: {
    flexDirection: "row",
    //  position: "absolute",
  },
});
export default Footer;
