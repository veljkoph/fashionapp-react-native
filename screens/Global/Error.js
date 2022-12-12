import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const Error = () => {
  const animation = React.useRef(null);

  React.useEffect(() => {
    animation.current.play(0);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#2F2F2F",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LottieView
        ref={animation}
        style={{ width: 80, height: 80 }}
        source={require("../../assets/animations/warning.json")}
        autoPlay={true}
        loop={false}
        speed={1}
      />
      <Text
        style={{
          fontSize: 28,
          color: "#fff",
          fontFamily: "Rondal-BOLD",
          letterSpacing: 2,
        }}
      >
        Error
      </Text>
    </View>
  );
};

export default Error;
