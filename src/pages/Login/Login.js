import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/Context";
import AuthService from "../../service/AuthService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { formData, accountData, setAccountData, setFormData, setAccessToken } =
    useContext(GlobalContext);

  const { signIn } = AuthService();
  const navigate = useNavigate();

  const Login = async () => {
    const res = await signIn();
    if (res.data.message === "Login Success") {
      setAccessToken(res.data.token);
      setAccountData(res.data.checkUser);
      navigate("/");
    } else {
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col w-auto mt-10 p-20 bg-slate-400 rounded-2xl">
        <h1 className="text-2xl font-bold mt-0 rounded-2xl">Login</h1>
        <label className="mt-4">Email</label>
        <input
          onChange={(event) => {
            setFormData({
              ...formData,
              email: event.target.value,
            });
          }}
          className="rounded-2xl mt-0 p-2"
          type="email"
          placeholder="Enter Your Email"
        ></input>

        <label className="mt-4">Password</label>
        <input
          onChange={(event) => {
            setFormData({
              ...formData,
              password: event.target.value,
            });
          }}
          className="rounded-2xl mt-0 p-2"
          type="password"
          placeholder="Enter Your Password"
        ></input>
        <button
          onClick={Login}
          className="mt-8 bg-black text-white p-2 rounded-xl"
        >
          Login
        </button>
        <button
          onClick={() => {
            navigate("/register");
          }}
          className="mt-8 bg-black text-white p-2 rounded-xl"
        >
          Register
        </button>
        {/* <h1>{data.name}</h1> */}
      </div>
    </div>
  );
};

export default Login;
