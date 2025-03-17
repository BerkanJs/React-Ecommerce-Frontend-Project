import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ShopContext } from "../context/ShopContext";

const LatestCollections = () => {
  const { LatestItems } = useContext(ShopContext);

  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    setLatestProducts(LatestItems.slice(0, 6));
  }, [LatestItems]);

  return (
    <div className="w-full min-h-[75vh] flex flex-col space-y-8 sm:space-y-12 items-center justify-center mb-8 sm:mb-12 px-4 sm:px-8">
      {/* Header Section */}
      <h1 className="text-2xl sm:text-4xl font-light tracking-widest text-[#031444] text-center">
        Our New Collection.
      </h1>

      {/* Desc. Section */}
      <h3 className="text-lg sm:text-2xl font-extralight text-gray-500 tracking-tighter text-center leading-snug sm:leading-normal max-w-3xl">
        Discover our new collection featuring the latest in tech, fashion, and
        accessories. Elevate your style with premium quality products designed
        for every occasion.
      </h3>

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 w-full max-w-7xl justify-center">
        {latestProducts.map((data) => (
          <ProductCard
            key={data.id}
            name={data.name}
            id={data.id}
            price={data.price}
            img={data.img}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollections;
