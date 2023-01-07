import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAuth from "./useAuth";
//import { BASE_URL } from "@env";

const fetchFunction = async () => {
  const data = await axios.get(`http://192.168.0.34:3000/auth/validateuser`, {
    headers: {
      token: await AsyncStorage.getItem("token"),
      id: await AsyncStorage.getItem("token"),
    },
  });
  return data?.data;
};

const useUserValidation = async () => {
  // const { setUser } = useAuth();

  return useQuery([`validatedUser`], () => fetchFunction(), {
    enabled: !!(await AsyncStorage.getItem("token")),
    //  onSuccess: (data) => setUser(data),
  });
};

export default useUserValidation;
