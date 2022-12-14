import { View, Text, FlatList, SafeAreaView } from "react-native";
import React from "react";
import Header from "../../components/Profile/Header";
import { Colors } from "../../constants/colors";
import ListItem from "../../components/Profile/ListItem";

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

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <FlatList
        ListHeaderComponent={<Header />}
        style={{ backgroundColor: Colors.background }}
        contentContainerStyle={{ paddingBottom: 40 }}
        data={videos}
        numColumns={2}
        renderItem={({ item }) => <ListItem video={item} />}
      />
    </SafeAreaView>
  );
};

export default Profile;
