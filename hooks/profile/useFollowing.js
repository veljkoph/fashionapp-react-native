import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { BASE_URL } from "@env";

const fetchFunction = async (userID) => {
  const data = await axios.get(`${BASE_URL}/users/following/${userID}`);
  return data?.data;
};

const useFollowing = (userId) => {
  console.log(userId, "userID");
  return useQuery([`following/${userId}`], () => fetchFunction(userId), {
    enabled: !!userId,
    onSettled: (data) => {},
  });
};

export default useFollowing;
