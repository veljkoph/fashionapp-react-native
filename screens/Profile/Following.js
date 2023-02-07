import { View, Text, FlatList } from "react-native";
import React from "react";
import { Colors } from "../../constants/colors";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import FollowingErs from "../../components/Profile/FollowingsErs";
import HeaderWIthTitle from "../../components/Global/HeaderWIthTitle";
import useFollowing from "../../hooks/profile/useFollowing";

const Following = ({ route }) => {
  const insets = useSafeAreaInsets();

  const {
    data: following,
    isError,
    isLoading,
  } = useFollowing(route?.params?.userId);
  if (isError) return null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <HeaderWIthTitle title={"Following"} />
      <FlatList
        style={{ backgroundColor: Colors.background }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 80 }}
        data={Array.isArray(following) ? following : []}
        numColumns={1}
        keyExtractor={(item, index) => item._id}
        renderItem={({ item, index }) => (
          <FollowingErs
            image={item?.avatar}
            following={item?.following}
            username={item?.username}
            index={index}
            id={item._id}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Following;
