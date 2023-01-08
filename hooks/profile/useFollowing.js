import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "@env";
import useAuth from "../auth/useAuth";

const fetchFunction = async (userID) => {
  const data = await axios.get(`${BASE_URL}/users/${userID}/following`);
  return data?.data;
};

const useFollowing = () => {
  const { user } = useAuth();
  return useQuery([`following/${user.id}`], () => fetchFunction(user.id), {
    enabled: !!user?.id,
  });
};

export default useFollowing;
