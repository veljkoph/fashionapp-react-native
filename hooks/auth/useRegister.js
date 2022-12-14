import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

const postFunction = async (values) => {
  const data = axios.post(`http://192.168.0.109:3000/auth/register`, values, {
    headers: {
      "Content-Type": "application/json",
      //  authorization: await AsyncStorage.getItem("token"),
    },
  });
  return data;
};
const useRegister = () => {
  return useMutation(
    async (values) => {
      return postFunction(values);
    },
    {
      onSuccess: () => {
        console.log("data");
      },
    }
  );
};

export default useRegister;
