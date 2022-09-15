import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import Navigation from "./navigation/Navigation";
import Onboarding from "./screens/Onboarding";

export default function App() {
  const [loaded] = useFonts({
    "MeshedDisplay-SemiBold": require("./assets/fonts/MESHED-VF.ttf"),
    "Sh-BOLD": require("./assets/fonts/ShockaSerif-Bold.otf"),
    "Rondal-BOLD": require("./assets/fonts/Rondal-Bold.otf"),
    Hinge: require("./assets/fonts/Hinge.otf"),
    "Cormorant-Regular": require("./assets/fonts/Cormorant-Regular.ttf"),
    "Cormorant-Bold": require("./assets/fonts/Cormorant-Bold.ttf"),
    "Cabin-Regular": require("./assets/fonts/Cabin-Regular.ttf"),
  });

  if (!loaded) return <ActivityIndicator size="large" />;
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
