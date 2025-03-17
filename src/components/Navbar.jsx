import React, { useContext, useState } from "react";
import { SiBigcommerce } from "react-icons/si";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const { searchButton, setSearchButton, getCartCount } = useContext(ShopContext);
  const location = useLocation(); 
  const isCollectionsPage = location.pathname === "/collections";
  const handleSearchClick = () => {
    if (isCollectionsPage) {
      setSearchButton(!searchButton); // Yalnızca Collections sayfasında arama kutusunu aç/kapa yap
    }
  };

  const NavbarData = [
    { id: 1, page: "Home", url: "/" },
    { id: 2, page: "About", url: "/about" },
    { id: 3, page: "Collection", url: "/collections" },
    { id: 4, page: "Contact", url: "/contact" },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="flex items-center justify-between mt-3 px-6 py-2 sticky top-0 z-20 bg-white">
      {/* Logo Section */}
      <div className="flex items-center justify-center text-3xl">
        <SiBigcommerce className="mr-3 text-4xl" />
        <h3 className="font-extralight tracking-widest text-xl sm:text-2xl md:text-3xl">
          E-Commerce
        </h3>
      </div>

      {/* Links Section - Desktop View */}
      <div className="hidden sm:flex w-1/3 px-4">
        {NavbarData.map((data) => (
          <NavLink
            key={data.id}
            to={data.url}
            className={({ isActive }) =>
              `flex flex-row mx-5 text-sm sm:text-lg md:text-xl font-light tracking-wide transition-all duration-300 ease-in-out ${
                isActive
                  ? "border-b-2 border-[#031444]"
                  : "border-b-2 border-transparent hover:border-blue-800"
              }`
            }
          >
            {data.page}
          </NavLink>
        ))}
      </div>

      {/* Icons Section */}
      <div className="flex space-x-6 text-xl sm:text-2xl md:text-3xl mr-4 hover:cursor-pointer">
        <Link to={"/collections"}>
          <CiSearch onClick={handleSearchClick} />
        </Link>
        <Link to={'/login'}>
        <IoPersonOutline />
        </Link>
        
        <div className="relative">
          <Link to={'/cart'}>
            <MdOutlineShoppingBag className="text-xl sm:text-2xl md:text-3xl text-gray-500" />
            <div className="absolute right-0 bottom-0 translate-x-1/5 translate-y-1/5">
              <span className="text-xs text-white bg-black rounded-full p-[5px]">
                {getCartCount()}
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <BiMenuAltLeft
          onClick={() => setOpenMenu(!openMenu)}
          className="sm:hidden cursor-pointer text-3xl sm:text-4xl"
        />
      </div>

      {/* Side Menu Section - Mobile View */}
      <div
        className={`${
          openMenu ? "flex" : "hidden"
        } flex-col fixed inset-0 bg-white z-50 p-5 space-y-6 transform transition-all duration-300 ease-in-out sm:hidden`}
      >
        <IoMdClose
          onClick={() => setOpenMenu(!openMenu)}
          className="absolute right-5 top-5 cursor-pointer text-4xl sm:text-5xl md:text-6xl"
        />
        <div className="flex flex-col items-center justify-center space-y-6 pt-24">
          {NavbarData.map((data) => (
            <NavLink
              key={data.id}
              onClick={() => setOpenMenu(!openMenu)}
              to={data.url}
              className={({ isActive }) =>
                `text-4xl font-light tracking-wide transition-all duration-300 ease-in-out ${
                  isActive
                    ? "border-b-2 border-[#d8c1a1]"
                    : "border-b-2 border-transparent hover:border-[#d8c1a1]"
                }`
              }
            >
              {data.page}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
