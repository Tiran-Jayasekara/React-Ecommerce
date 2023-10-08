import React, { useContext, useEffect } from "react";
import ProductService from "../../service/ProductService";
import { GlobalContext } from "../../context/Context";

const Store = () => {

  useEffect(()=>{
    getAllProductsDetails();
  },[])
  const { getAllProducts } = ProductService();
  const { allProducts, setAllProducts } = useContext(GlobalContext);

  const getAllProductsDetails = async () => {
    const res = await getAllProducts();
    setAllProducts(res.data.allProducts);
  };
  console.log(allProducts);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl font-bold text-center text-gray-600 mt-10">
        This is Store Page
      </h1>
      {/* <button
        onClick={() => {
          getAllProductsDetails();
        }}
        className="text-center bg-black text-white p-2 mt-4"
      >
        AllProducts
      </button> */}
      <div className="flex mt-10">
      {allProducts.map((product) => (
        <div key={product._id}>
          <p>Name: {product.name}</p>
          <img src={product.imageUrl} />
          <p>Email: {product.description}</p>
        </div>
      ))}
      </div>
     
    </div>
  );
};

export default Store;
