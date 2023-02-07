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
        flex: 1,
      }}
    >
      <LottieView
        speed={2.4}
        style={{
          width: 80,
          height: 80,
          zIndex: -10,
          marginTop: 20,
        }}
        source={require("../../assets/animations/circle.json")}
        autoPlay={true}
        loop={true}
        ref={animation}
      />
    </View>
  );
};

export default LoaderModal;
