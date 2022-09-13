import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import Onboarding from "./screens/Onboarding";

export default function App() {
  const [loaded] = useFonts({
    "SFPRO-Black": require("./assets/fonts/SF-Pro-Display-Black.ttf"),
    "SFPRO-Light": require("./assets/fonts/sf-pro-text-light.ttf"),
    "SFPRO-Medium": require("./assets/fonts/sf-pro-text-medium.ttf"),
    "SFPRO-Regular": require("./assets/fonts/sf-pro-text-regular.ttf"),
    "MeshedDisplay-SemiBold": require("./assets/fonts/MESHED-VF.ttf"),
    "Sh-BOLD": require("./assets/fonts/ShockaSerif-Bold.otf"),
    "Rondal-BOLD": require("./assets/fonts/Rondal-Bold.otf"),
    Hinge: require("./assets/fonts/Hinge.otf"),
  });

  if (!loaded) return <ActivityIndicator size="large" />;
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Onboarding />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
