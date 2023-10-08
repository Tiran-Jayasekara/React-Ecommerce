import axios from "axios";
import React, { useContext } from "react";
import { GlobalContext } from "../context/Context";

const AuthService = () => {
  const { data, setData, formData, accessToken, setResMessage, addAddress } =
    useContext(GlobalContext);

  const http = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 2000,
    headers: {
      "Content-type": "application/json",
      "x-auth-token": accessToken,
    },
  });

  async function signUp() {
    const { name, email, password, role } = formData;
    return http
      .post("/users/addUser", { name, email, password, role })
      .then((res) => res)
      .catch((err) => console.log(err));
  }

  async function signIn() {
    const { email, password } = formData;

    return http
      .post("/users/Login", { email, password })
      .then((res) => res)
      .catch((err) => console.log(err));
  }

  async function Address() {
    const { userID, fullName, address, city, country, postalCode } = addAddress;
    return http
      .post("/address/addAddress", {
        userID,
        fullName,
        address,
        city,
        country,
        postalCode,
      })
      .then((res) => res)
      .catch((err) => console.log(err));
  }

  return { signUp, signIn, Address };
};

export default AuthService;
