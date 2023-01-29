import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@env";

const fetchFunction = async (userID) => {
  const data = await axios.get(`${BASE_URL}/users/${userID}`);
  return data?.data;
};

const useProfileData = (userId) => {
  return useQuery([`following/${userId}`], () => fetchFunction(userId), {
    enabled: !!userId,
  });
};

export default useProfileData;
