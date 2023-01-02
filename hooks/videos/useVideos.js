import axios from "axios";
import { useQuery } from "@tanstack/react-query";
//import { BASE_URL } from "@env";

const fetchFunction = async () => {
  const data = await axios.get(`http://192.168.0.34:3000/posts/`);
  return data?.data;
};

const useVideos = () => {
  return useQuery([`videos`], () => fetchFunction());
};

export default useVideos;
