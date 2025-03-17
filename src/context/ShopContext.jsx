import { createContext, useEffect, useState } from "react";
import {
  LatestItems,
  Policies,
  AllProducts,
  headphoneData,
} from "../assets/IMG/MockData";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const getCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cartItems");
  return savedCart ? JSON.parse(savedCart) : {};
};



const ShopContextProvider = (props) => {
  const [searchButton, setSearchButton] = useState(false);
  const [cartItems, setCartItems] = useState(getCartFromLocalStorage());
  const currency = "$";
  const delivery_fee = 10;

  // Add item to cart
  const addToCart = (itemId, feature) => {
    if (!feature) {
      toast.error("Choose a feature type!");
      return;
    }
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][feature]) {
        cartData[itemId][feature] += 1;
      } else {
        cartData[itemId][feature] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][feature] = 1;
    }
    setCartItems(cartData);
  };

  // Update quantity of item
  const updateQuantity = (itemId, feature, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][feature] = quantity;
    setCartItems(cartData);
  };

  // Get the total amount of cart
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = AllProducts.find((product) => product.id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  // Get total cart count
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const value = {
    LatestItems,
    currency,
    delivery_fee,
    Policies,
    AllProducts,
    headphoneData,
    searchButton,
    setSearchButton,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
