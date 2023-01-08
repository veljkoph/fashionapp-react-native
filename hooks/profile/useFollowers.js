import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@env";
import useAuth from "../auth/useAuth";

const fetchFunction = async (userID) => {
  const data = await axios.get(`${BASE_URL}/users/${userID}/followers`);
  return data;
};

const useFollowers = async () => {
  const { user } = useAuth();
  return useQuery([`followers/${user.id}`], () => fetchFunction(user.id), {
    enabled: !!user?.id,
  });
};

export default useFollowers;
