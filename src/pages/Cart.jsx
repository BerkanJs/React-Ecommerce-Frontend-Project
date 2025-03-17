import React, { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { ShopContext } from "../context/ShopContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import CartTotal from "../components/CartTotal";
const Cart = () => {
  const { AllProducts, currency, cartItems, updateQuantity } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  const tempData = [];
  useEffect(() => {
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            id: items,
            feature: item,
            quantitiy: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  console.log(AllProducts);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <h1>Your Cart</h1>
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = AllProducts.find(
            (product) => product.id === item.id
          );
          return (
            <div
              className="py-4 border-t border -b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              key={index}
            >
              <div className="flex items-start gap-6">
                <img className="w-16 sm:w-20" src={productData.img} alt="" />
                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      {item.feature}
                    </p>
                  </div>
                </div>
              </div>

              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item.id,
                        item.feature,
                        Number(e.target.value)
                      )
                }
                className="border max-w-10 sm:max-w-20 px-1 sm:px-1 py-1"
                type="number"
                min={1}
                defaultValue={item.quantitiy}
                name=""
                id=""
              />
              <RiDeleteBin6Line
                onClick={() => updateQuantity(item.id, item.feature, 0)}
                className="w-4 mr-4 sm:w-5 cursor-pointer"
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default Cart;
