import { View, Text, FlatList } from "react-native";
import React from "react";
import { Colors } from "../../constants/colors";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import FollowingErs from "../../components/Profile/FollowingsErs";
import HeaderWIthTitle from "../../components/Global/HeaderWIthTitle";
import useFollowers from "../../hooks/profile/useFollowers";

const Followers = ({ route }) => {
  const insets = useSafeAreaInsets();

  const {
    data: followers,
    isError,
    isLoading,
  } = useFollowers(route?.params?.userId);

  if (isError) return null;
  console.log(followers, "folowrs");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <HeaderWIthTitle title={"Followers"} />
      <FlatList
        style={{ backgroundColor: Colors.background }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 80 }}
        data={followers}
        numColumns={1}
        renderItem={({ item, index }) => (
          <FollowingErs
            image={item.avatar}
            following={item.following}
            username={item.username}
            index={index}
            id={item._id}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Followers;
