import { View, Text, FlatList, SafeAreaView, Platform } from "react-native";
import React from "react";
import Header from "../../components/Profile/Header";
import { Colors } from "../../constants/colors";
import ListItem from "../../components/Profile/ListItem";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useAuth from "../../hooks/auth/useAuth";
import RegistrationOptions from "../RegistrationOptions";
import useProfileData from "../../hooks/profile/useProfileData";

const Profile = ({ route }) => {
  const insets = useSafeAreaInsets();
  const {
    data: user,
    isError,
    isLoading,
  } = useProfileData(route?.params?.userId);

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
        //   data={videos}
        numColumns={2}
        // renderItem={({ item }) => <ListItem video={item} />}
      />
    </View>
  );
};

export default Profile;
