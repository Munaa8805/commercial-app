import React, { useState, useEffect, useContext, createContext } from "react";

const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productFetch = async () => {
      try {
        const response = await fetch("https://restapi.munaa.dev/api/v1/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const responseData = await response.json();
        // console.log("responseproducts", responseData);
        setProducts(responseData.data);
      } catch (err) {
        console.log("error PRODUCTS", err);
      }
    };
    productFetch();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};
