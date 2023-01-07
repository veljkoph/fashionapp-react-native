import React, { useEffect, useState } from "react";
import { createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "@env";
import axios from "axios";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const auth = async (navigation) => {
    try {
      const response = await axios.get(
        `http://192.168.0.34:3000/auth/validateuser`,
        {
          params: {
            token: await AsyncStorage.getItem("token"),
            id: await AsyncStorage.getItem("id"),
            r: 1,
          },
        }
      );
      setUser(response?.data);
    } catch (error) {
      setUser(false);
      console.log(error);
    }
  };

  useEffect(() => {
    auth();
  }, []);
  console.log(user, "USER");
  return (
    <UserContext.Provider
      value={{
        setUser,
        user,
        auth,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
