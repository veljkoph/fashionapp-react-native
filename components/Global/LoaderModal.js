import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { Colors } from "../../constants/colors";

const LoaderModal = () => {
  const animation = React.useRef(null);

  React.useEffect(() => {
    animation.current.play(0);
  }, []);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: Colors.semiTransparent2,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        zIndex: 10,
      }}
    >
      <LottieView
        speed={1}
        style={{
          width: 100,
          height: 100,
          zIndex: -10,
        }}
        source={require("../../assets/animations/wave.json")}
        autoPlay={true}
        loop={true}
        ref={animation}
      />
    </View>
  );
};

export default LoaderModal;
