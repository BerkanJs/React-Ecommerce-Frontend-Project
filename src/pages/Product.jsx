import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const { AllProducts, addToCart } = useContext(ShopContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // Başlangıçta null
  const [selectedFeature, setSelectedFeature] = useState(null); // Seçilen feature state

  useEffect(() => {
    // Filtering data by id
    const filteredProduct = AllProducts.find((item) => item.id === id);
    setProduct(filteredProduct);

    // Eğer ürün varsa, ilk resmini seç
    if (filteredProduct?.images && filteredProduct.images.length > 0) {
      setSelectedImage(filteredProduct.images[0]);
    }
  }, [id, AllProducts]);

  if (!product || !selectedImage) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-[90vh] w-full mt-10">
      {/* Flex Layout */}
      <div className="flex flex-col sm:flex-row px-4 sm:px-12 space-y-6 sm:space-y-0 sm:space-x-8">
        {/* Left Side - 3 Boxes */}
        <div className="flex sm:flex-col space-x-4 sm:space-x-0 sm:space-y-4 w-full sm:w-[120px] md:w-[150px]">
          {/* Boxes */}
          {product.images.map((data, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(data)}
              className="h-[100px] sm:h-[120px] w-full border-2 border-gray-300 hover:cursor-pointer"
            >
              <img
                className="object-cover w-full h-full"
                src={data}
                alt={`product-image-${index}`}
              />
            </div>
          ))}
        </div>

        {/* Right Side - Big Box and Desc */}
        <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 w-full sm:w-2/3">
          {/* Right Box - Büyük Fotoğraf */}
          <div className="h-[250px] sm:h-[400px] w-full">
            <img
              className="object-contain w-full h-full"
              src={selectedImage}
              alt="selected-product"
            />
          </div>
        </div>

        {/* Desc Box */}
        <div className="flex flex-col justify-between space-y-4 sm:space-y-6 w-full sm:w-1/2">
          <h1 className="text-xl sm:text-2xl font-semibold">{product.name}</h1>
          <h3 className="text-lg sm:text-xl font-medium text-gray-500">{product.category}</h3>

          {product.futures && product.futures.length > 0 && (
            <h4 className="text-lg font-semibold">Select Features</h4>
          )}

          <div className="flex flex-wrap gap-2">
            {product.futures &&
              product.futures.length > 0 &&
              product.futures.map((data, index) => (
                <p
                  key={index}
                  onClick={() => setSelectedFeature(data)}
                  className={`font-semibold border border-gray-400 cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out rounded-lg px-3 py-1.5 hover:border-gray-500 ${
                    selectedFeature === data ? "bg-gray-300" : ""
                  }`}
                >
                  {data}
                </p>
              ))}
          </div>

          <span className="text-xl font-semibold">{product.price} $</span>

          {/* Add To Cart Button */}
          <button
            onClick={() => addToCart(product.id, selectedFeature)} // Seçilen feature'ı ekle
            disabled={!selectedFeature} // Feature seçilmediyse butonu devre dışı bırak
            className="bg-black text-white w-full sm:w-[140px] h-[40px] mx-auto rounded-lg hover:bg-gray-800 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-600 cursor-pointer"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
