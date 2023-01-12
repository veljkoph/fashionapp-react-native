import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@env";
const postFunction = async (values) => {
  const data = axios.post(`${BASE_URL}/auth/register`, values, {
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
