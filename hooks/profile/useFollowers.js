import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@env";

const fetchFunction = async (userID) => {
  const data = await axios.get(`${BASE_URL}/users/followers/${userID}`);
  return data?.data;
};

const useFollowers = (userId) => {
  console.log(userId, "userID");
  return useQuery([`followers/${userId}`], () => fetchFunction(userId), {
    enabled: !!userId,
  });
};

export default useFollowers;
