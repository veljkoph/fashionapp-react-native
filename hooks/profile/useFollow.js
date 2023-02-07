import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useToast } from "react-native-toast-notifications";
import { BASE_URL } from "@env";
import useAuth from "../auth/useAuth";

const serviceFunction = async (values) => {
  const data = axios.put(
    `${BASE_URL}/users/${values.followId}/follow`,
    { userId: values.userId },
    {
      headers: {
        "Content-Type": "application/json",
        authorization: await AsyncStorage.getItem("token"),
      },
    }
  );
  return data;
};
const useFollow = () => {
  const { user, auth } = useAuth();
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation(
    async (id) => {
      return serviceFunction({ followId: id, userId: user?._id });
    },
    {
      onSuccess: async (data) => {
        toast.show("Success", {
          type: "success",
          animationType: "zoom-in",
        });
        // queryClient.invalidateQueries([`followers/${user?._id}`]);
        // queryClient.invalidateQueries([`following/${user?._id}`]);
        auth();
      },
    }
  );
};

export default useFollow;
