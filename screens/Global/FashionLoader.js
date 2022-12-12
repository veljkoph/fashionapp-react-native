import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const FashionLoader = () => {
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
        style={{ width: 100, height: 100 }}
        source={require("../../assets/animations/fashionLoader.json")}
        autoPlay={true}
        loop={true}
        speed={0.7}
      />
    </View>
  );
};

export default FashionLoader;
