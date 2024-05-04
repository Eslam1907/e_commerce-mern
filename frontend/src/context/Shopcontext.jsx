import { createContext, useEffect } from "react";
import PropTypes from "prop-types"; // استيراد PropTypes
import all_products from "../assets/all_products";
import { useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());
  const [all_products, setAll_products] = useState([]);
 
  useEffect(() => {
    fetch("https://e-commerce-mern-3-d0ep.onrender.com/allproduct/")
      .then((res) => res.json())
      .then((data) => setAll_products(data));

    if (localStorage.getItem("auth-token")) {
      fetch("https://e-commerce-mern-3-d0ep.onrender.com/getcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: "",
      }).then((res) => res.json())
        .then((data) => setCartItem(data));
    }
  }, []);

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

    if (localStorage.getItem("auth-token")) {
      fetch("https://e-commerce-mern-3-d0ep.onrender.com/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("https://e-commerce-mern-3-d0ep.onrender.com/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  const getTotalPrice = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItem[item];
      }
    }
    return totalAmount;
  };
  const totalCart = () => {
    let totalcart = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalcart += cartItem[item];
      }
    }
    return totalcart;
  };
  const contextValue = {
    totalCart,
    all_products,
    cartItem,
    addToCart,
    removeFromCart,
    getTotalPrice,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node, // تحقق صحة خاصية الـ children
};

export default ShopContextProvider;
