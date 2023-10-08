import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/Context";
import Substract from "../../components/Substract/Substract";
import AuthService from "../../service/AuthService";

const Home = () => {
  const { accountData, setData , resMessage } = useContext(GlobalContext);
  const { signUp , signIn ,Address} = AuthService();

  const UserAddress = async () => {
    const res = await Address();
    console.log(res);
  };


  const LogIn = async()=>{
    // const res = await signIn();
    
    
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-center text-gray-600 mt-10">
        This is Home Page
      </h1>
      <button
        className="bg-black text-white p-2 mt-10"
        onClick={() => {
          UserAddress();
        }}
      >
        Address
      </button>
      <h1>Data : {accountData.name}</h1>
      {/* <Substract LogIn={LogIn} data={accountData} /> */}
      <h1>{resMessage}</h1>
    </div>
  );
};

export default Home;
