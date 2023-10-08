import axios from "axios";
import { useContext } from "react";
import { GlobalContext } from "../context/Context";
const ProductService = () => {

    const {accessToken} = useContext(GlobalContext)
  const http = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 2000,
    headers: {
      "Content-type": "application/json",
      "x-auth-token": accessToken,
    },
  });

  async function getAllProducts() {
    return http
      .get("/products/getAllProducts")
      .then((res) => res)
      .catch((err) => console.log(err));
  }
  return {getAllProducts};
};

export default ProductService;
