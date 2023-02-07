import { View, FlatList, Platform } from "react-native";
import React from "react";
import Header from "../../components/Profile/Header";
import { Colors } from "../../constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
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
      <Header user={user} />
      {/* <FlatList
        ListHeaderComponent={<Header user={user} />}
        style={{ backgroundColor: Colors.background }}
        contentContainerStyle={{ paddingBottom: insets.bottom + 80 }}
        keyExtractor={(item, index) => index.toString()}
        //   data={videos}
        numColumns={2}
        // renderItem={({ item }) => <ListItem video={item} />}
      /> */}
    </View>
  );
};

export default Profile;
