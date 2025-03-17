import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Order = () => {
  const { AllProducts, currency } = useContext(ShopContext);
  
  return (
    <div className="border-t pt-16">
      <div className="text-2xl text-center mb-8">
        <h1>Orders</h1>
      </div>
      <div className="container mx-auto px-4">
        {AllProducts.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-b text-gray-700 flex flex-col md:flex-row items-center justify-between gap-4 mb-4 border-t"
          >
            {/* Sol Taraf - Ürün Bilgisi */}
            <div className="flex gap-4 items-center w-full md:w-3/5">
              <img
                className="w-20 h-20 object-cover rounded-md"
                src={item.img}
                alt={item.name}
              />
              <div className="text-sm">
                <p className="font-medium">{item.name}</p>
                <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                  <p className="text-sm">
                    {currency}
                    {item.price}
                  </p>
                  <p>Qty: 1</p>
                  <p>Feature: 1</p>
                </div>
                <p className="mt-1 text-xs">
                  Date: <span className="text-gray-400">25, March, 2025</span>
                </p>
              </div>
            </div>
            
            {/* Sağ Taraf - Durum ve Track Button */}
            <div className="w-full md:w-2/5 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-xs md:text-sm">Ready to ship</p>
              </div>
              <button className="bg-black text-white px-3 py-1 text-xs font-medium rounded-md cursor-pointer">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
