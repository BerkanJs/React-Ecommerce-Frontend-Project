import React, { useContext, useState } from "react";
import CartTotal from "../components/CartTotal";
import { FaStripe } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";
import {Link} from 'react-router-dom';
const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t m-12">
      {/*        Left Side          */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <h1 className="text-xl sm:text-2xl my-3">Information</h1>

        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First name"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="E-mail"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Zipcode"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder="Phone"
        />
      </div>
      {/*         Right Side          */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <h3>Payment Method</h3>
          <div className="flex gap-3 flex-col lg:flex-row">
            {" "}
            {/* Buradaki lg-flex-row -> lg:flex-row olmalı */}
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-gray-400" : ""
                } `}
              ></p>
              <FaStripe className="text-4xl mx-4" />
            </div>
            <div
              onClick={() => setMethod("paypal")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "paypal" ? "bg-gray-400" : ""
                } `}
              ></p>
              <FaCcPaypal className="text-4xl mx-4" />
            </div>
            <div
              onClick={() => setMethod("googlepay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "googlepay" ? "bg-gray-400" : ""
                } `}
              ></p>
              <FaGooglePay className="text-4xl mx-4" />
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <Link to={'/orders'} >
            <button  className="bg-black text-white px-16 py-3 text-sm cursor-pointer">
              Place Order
            </button>
            </Link>
           
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
