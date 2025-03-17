import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "./ProductCard";
import FilteredProductBG3 from '../assets/IMG/FilteredProductBG3.avif'
const BestSellers = () => {
  const { LatestItems } = useContext(ShopContext);
 

  const [bestProducts, setBestProducts] = useState([]);

  /*
      useEffect(() => {
        const bestSellers = [];  
        LatestItems.map((data) => {
          if (data.bestSeller === true) {
            bestSellers.push(data); 
          }
        });
      
        setBestProducts(bestSellers); 
      }, []);

      console.log(bestProducts)

      */
  useEffect(() => {
    const bestSellers = LatestItems.filter((data) => data.bestSeller === true);
    setBestProducts(bestSellers);
  }, []);
  

  return (
    <div className="w-full min-h-screen flex flex-col space-y-12 items-center justify-start mt-24 mb-12 ">
    <h1 className="text-4xl font-light tracking-widest text-[#031444]">Best Products at the Best Price</h1>
    <h3 className="text-2xl font-extralight text-gray-500 tracking-tighter text-center">
      Discover our top-rated products, <br /> carefully selected to bring you the best in quality, style, and performance. <br />
      From tech gadgets to luxury accessories, our best products offer unbeatable value and satisfaction.
    </h3>
  
    <div  className="grid grid-rows-3 grid-cols-3 gap-4 w-full p-12 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${FilteredProductBG3})`}}>
      {/* Row 1: Left */}
      <ProductCard
        key={bestProducts[0]?.id}
        name={bestProducts[0]?.name}
        id={bestProducts[0]?.id}
        price={bestProducts[0]?.price}
        img={bestProducts[0]?.img}
      />
      <div></div>
      <div></div>
  
      {/* Row 2: Middle */}
      <div></div>
      <ProductCard
        key={bestProducts[1]?.id}
        name={bestProducts[1]?.name}
        id={bestProducts[1]?.id}
        price={bestProducts[1]?.price}
        img={bestProducts[1]?.img}
      />
      <div></div>
  
      {/* Row 3: Right */}
      <div></div>
      <div></div>
      <ProductCard
        key={bestProducts[2]?.id}
        name={bestProducts[2]?.name}
        id={bestProducts[2]?.id}
        price={bestProducts[2]?.price}
        img={bestProducts[2]?.img}
      />
    </div>
  </div>
  
  
  );
};

export default BestSellers;
