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
import useFollowers from "../../hooks/profile/useFollowers";

const arr = [
  {
    id: 0,
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    username: "tony018",
    following: true,
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    username: "henrietta",
    following: true,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
    username: "hannahfromberlin",
    following: true,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    username: "oneperson",
    following: true,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    username: "notanotherfashionblog",
    following: true,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    username: "a123nna",
    following: true,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1571816119607-57e48af1caa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    username: "annewith",
    following: true,
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    username: "bluehairedgirl",
    following: false,
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1571816119607-57e48af1caa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    username: "annewith",
    following: true,
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    username: "phill011",
    following: false,
  },
];

const Followers = () => {
  const insets = useSafeAreaInsets();

  const { data: folowers, isError, isLoading } = useFollowers();
  if (isLoading) return null;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <HeaderWIthTitle title={"Followers"} />
      <FlatList
        style={{ backgroundColor: Colors.background }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 80 }}
        data={folowers}
        numColumns={1}
        renderItem={({ item, index }) => (
          <FollowingErs
            image={item.image}
            following={item.following}
            username={item.username}
            index={index}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Followers;
