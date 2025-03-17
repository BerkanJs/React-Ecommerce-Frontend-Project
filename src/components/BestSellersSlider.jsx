import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import BestSellersSliderCard from "./BestSellersSliderCard";
import FilteredProductBG3 from '../assets/IMG/FilteredProductBG3.avif';

const BestSellersSlider = () => {
  const { LatestItems } = useContext(ShopContext);
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    const bestSellers = LatestItems.filter((data) => data.bestSeller === true);
    setBestProducts(bestSellers);
  }, [LatestItems]);

  return (
    <div className="w-full min-h-screen flex flex-col space-y-12 items-center justify-start mt-24 mb-12 px-4 sm:px-8">
      <h1 className="text-3xl sm:text-4xl font-light tracking-widest text-[#031444] text-center">
        Best Products at the Best Price
      </h1>
      <h3 className="text-lg sm:text-2xl font-extralight text-gray-500 tracking-tighter text-center leading-snug sm:leading-normal">
        Discover our top-rated products, <br className="hidden sm:block" /> carefully selected to bring you the best in quality, style, and performance. <br className="hidden sm:block" />
        From tech gadgets to luxury accessories, our best products offer unbeatable value and satisfaction.
      </h3>

      <div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full p-6 sm:p-12 bg-cover bg-center bg-no-repeat justify-center items-center"
        style={{ backgroundImage: `url(${FilteredProductBG3})` }}
      >
        {/* Row 1 */}
        <BestSellersSliderCard {...bestProducts[0]} index={0} />
        <div className="hidden md:block"></div>
        <div className="hidden md:block"></div>
        
        {/* Row 2 */}
        <div className="hidden md:block"></div>
        <BestSellersSliderCard {...bestProducts[1]} index={1} />
        <div className="hidden md:block"></div>
        
        {/* Row 3 */}
        <div className="hidden md:block"></div>
        <div className="hidden md:block"></div>
        <BestSellersSliderCard {...bestProducts[2]} index={2} />
      </div>
    </div>
  );
};

export default BestSellersSlider;
