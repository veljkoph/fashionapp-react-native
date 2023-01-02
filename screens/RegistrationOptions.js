import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Social from "../components/Onboarding/Social";

const RegistrationOptions = () => {
  const apple = require("../assets/apple.png");
  const google = require("../assets/google.png");
  const mail = require("../assets/mail.png");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>register</Text>
      <View style={styles.socials}>
        <Social
          text="Continue with Apple"
          image={apple}
          navigateTo={"Register"}
        />
        <Social
          text="Sign in with Google"
          image={google}
          navigateTo={"Register"}
        />
        <Social
          text="Sign in with email"
          image={mail}
          navigateTo={"Register"}
        />
        <Social text="Enter as Guest" navigateTo={"App"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F2F2F",
    //  flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    fontSize: 70,
    fontFamily: "Cormorant-Bold",
    color: "white",
    textAlign: "center",
    letterSpacing: 3,
    marginTop: 20,
    alignSelf: "flex-end",
    transform: [
      { rotate: "-90deg" },
      {
        translateY: 60,
      },
    ],
  },
  socials: {
    alignSelf: "flex-end",
    marginBottom: "10%",
    width: "100%",
  },
});

export default RegistrationOptions;
