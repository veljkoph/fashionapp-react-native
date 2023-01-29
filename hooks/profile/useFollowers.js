import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@env";
import useAuth from "../auth/useAuth";

const fetchFunction = async (userID) => {
  const data = await axios.get(`${BASE_URL}/users/${userID}/followers`);
  return data?.data;
};

const useFollowers = (userId) => {
  console.log(userId, "userId followrs");
  return useQuery([`followers/${userId}`], () => fetchFunction(userId), {
    enabled: !!userId,
  });
};

export default useFollowers;
