import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between bg-slate-300 p-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-600 text-center">
          Interview
        </h1>
      </div>
      <div className="flex flex-row justify-between">
        <ul className="flex text-lg font-semibold mr-4 justify-between text-center items-center text-gray-700 cursor-pointer">
          <li className="mr-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-4">
            <Link to="/about">About</Link>
          </li>
          <li className="mr-4">
            <Link to="/store">Store</Link>
          </li>
          <li className="mr-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/Login">
              <button className="bg-black text-white p-2 text-sm rounded-xl">Login</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
