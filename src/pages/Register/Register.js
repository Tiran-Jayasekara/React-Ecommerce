import React, { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import AuthService from "../../service/AuthService";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { formData, setFormData } = useContext(GlobalContext);
  const { signUp } = AuthService();
  const Navigate = useNavigate();

  const register = async () => {
    const res = await signUp();
    if (res.data.message === "User Add Successfull") {
        console.log(res.data.message);
        Navigate('/login')
    } else {
        console.log(res.data.message);
    }
    
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col bg-slate-400 mt-20  w-auto p-10 rounded-2xl">
        <h1 className="text-2xl font-bold text-gray-600 mt-0 ">Register</h1>
        <label className="mt-6">Name</label>
        <input
          onChange={(e) => {
            setFormData({
              ...formData,
              name: e.target.value,
            });
          }}
          className="rounded-xl p-1"
          type="text"
          placeholder="Enter Your Name"
        ></input>
        <label className="mt-6">Email</label>
        <input
          onChange={(e) => {
            setFormData({
              ...formData,
              email: e.target.value,
            });
          }}
          className="rounded-xl p-1"
          type="email"
          placeholder="Enter Your Email"
        ></input>
        <label className="mt-6">Password</label>
        <input
          onChange={(e) => {
            setFormData({
              ...formData,
              password: e.target.value,
            });
          }}
          className="rounded-xl p-1"
          type="password"
          placeholder="Enter Your Password"
        ></input>
        <label className="mt-6">Role</label>
        <input
          onChange={(e) => {
            setFormData({
              ...formData,
              role: e.target.value,
            });
          }}
          className="rounded-xl p-1"
          type="text"
          placeholder="Enter Your Role"
        ></input>

        <button
          className="bg-black text-white p-2 rounded-2xl mt-4"
          onClick={register}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
