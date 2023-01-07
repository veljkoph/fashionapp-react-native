import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAuth from "./useAuth";

const postFunction = async (values) => {
  const data = axios.post(`http://192.168.0.34:3000/auth/login`, values, {
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
