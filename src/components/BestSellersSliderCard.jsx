import React, { useState } from "react";
import { Link } from "react-router-dom";

const BestSellersSliderCard = ({ id, name, price, img, index }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const getCardClass = () => {
    let cardClass =
      "transition-all duration-500 ease-in-out w-full max-w-[90%] sm:max-w-[600px] rounded-lg shadow-lg p-4 cursor-pointer";

    if (isClicked) {
      switch (index) {
        case 0:
          cardClass += " sm:w-[80%] md:w-[500px] h-[500px] transform sm:translate-x-6";
          break;
        case 1:
          cardClass += " sm:w-[80%] md:w-[500px] h-[500px] transform scale-110";
          break;
        case 2:
          cardClass += " sm:w-[80%] md:w-[500px] h-[500px] transform sm:-translate-x-6";
          break;
        default:
          break;
      }
    } else {
      cardClass += " h-[250px] sm:h-[270px]";
    }

    return cardClass;
  };

  return (
    <div
      className={`flex flex-col items-center justify-center bg-white ${getCardClass()}`}
      onClick={handleClick}
    >
      {/* Ürün Fotoğrafı */}
      <div className="w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] mb-4">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={img}
          alt={name}
        />
      </div>

      {/* Kapalıyken sadece başlık */}
      {!isClicked && (
        <h4 className="text-lg sm:text-xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300 text-center">
          {name}
        </h4>
      )}

      {/* Açıldığında gösterilecek içerik */}
      {isClicked && (
        <div className="flex flex-col items-center sm:items-start space-y-2 text-center sm:text-left">
          <h4 className="text-lg sm:text-xl font-semibold text-gray-800">{name}</h4>
          <p className="mt-2 text-sm sm:text-lg font-medium text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi harum officia ut, explicabo nulla repudiandae?
          </p>
          <h5 className="text-sm sm:text-lg font-medium text-gray-600">{price}$</h5>
          <Link to={`/product/${id}`} >
          <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black hover:cursor-pointer transition">
            Go to Product
          </button>
          </Link>
      
        </div>
      )}
    </div>
  );
};

export default BestSellersSliderCard;
