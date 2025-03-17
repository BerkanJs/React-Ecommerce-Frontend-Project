import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full h-auto p-6 bg-blue-50 rounded-lg shadow-md max-w-full mx-auto text-center">
      <h1 className="text-3xl sm:text-4xl font-semibold text-[#031444] mb-4">
        Subscribe now and get 40% off
      </h1>
      <h3 className="text-lg sm:text-xl text-gray-600 mb-6">
        Sign up today and enjoy an exclusive 40% discount on your first
        purchase. Don't miss out on this limited-time offer to save big!
      </h3>
      <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-x-4 sm:space-y-0">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 border-2 border-gray-300 rounded-md text-gray-700 w-64 sm:w-80 md:w-96 lg:w-[400px]"
        />
        <button className="bg-[#031444] text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300 hover:cursor-pointer w-full sm:w-auto">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
