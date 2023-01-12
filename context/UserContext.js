import React, { useEffect, useState } from "react";
import { createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "@env";
import axios from "axios";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const auth = async (navigation) => {
    const token = await AsyncStorage.getItem("token");
    const userId = await AsyncStorage.getItem("id");
    try {
      const response = await axios.get(
        `${BASE_URL}/auth/validateuser?id=${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: token,
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
