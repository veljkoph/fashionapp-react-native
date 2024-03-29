import { View, Text, FlatList, SafeAreaView, Platform } from "react-native";
import React from "react";
import Header from "../../components/Profile/Header";
import { Colors } from "../../constants/colors";
import ListItem from "../../components/Profile/ListItem";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useAuth from "../../hooks/auth/useAuth";
import RegistrationOptions from "../RegistrationOptions";
import useFollowers from "../../hooks/profile/useFollowers";
const videos = [
  {
    id: 1,
    uri: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711&q=80",
    tags: ["HEELS"],
  },
  {
    id: 2,
    uri: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",
    tags: ["OOTD"],
  },
  {
    id: 3,
    uri: "https://images.unsplash.com/photo-1618885367339-0c4cbc339642?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    tags: ["BOOTS"],
  },
  {
    id: 4,
    uri: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    tags: ["MALE"],
  },
];

const MyProfile = () => {
  const insets = useSafeAreaInsets();
  const { user } = useAuth();

  if (!user) return <RegistrationOptions />;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.background,
        paddingTop: Platform.OS === "ios" ? insets.top + 10 : 50,
      }}
    >
      <FlatList
        ListHeaderComponent={<Header user={user} />}
        style={{ backgroundColor: Colors.background }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 80 }}
        data={videos}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({ item }) => <ListItem video={item} />}
      />
    </View>
  );
};

export default MyProfile;
