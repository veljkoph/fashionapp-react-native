import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { UserProvider } from "./context/UserContext";
import Navigation from "./navigation/Navigation";

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
  const queryClient = new QueryClient();
  if (!loaded)
    return (
      // <ActivityIndicator
      //   size="large"
      //   style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      // />
      null
    );
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <Navigation />
        </QueryClientProvider>
      </UserProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
