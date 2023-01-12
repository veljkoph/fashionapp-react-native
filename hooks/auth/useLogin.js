import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAuth from "./useAuth";
import { BASE_URL } from "@env";

const postFunction = async (values) => {
  const data = axios.post(`${BASE_URL}/auth/login`, values, {
    headers: {
      "Content-Type": "application/json",
      //  authorization: await AsyncStorage.getItem("token"),
    },
  });
  return data;
};
const useLogin = () => {
  const { auth } = useAuth();
  return useMutation(
    async (values) => {
      return postFunction(values);
    },
    {
      onSuccess: async (data) => {
        await AsyncStorage.setItem("token", data?.data?.token);
        await AsyncStorage.setItem("id", data?.data?.id);
        auth();
      },
    }
  );
};

export default useLogin;
