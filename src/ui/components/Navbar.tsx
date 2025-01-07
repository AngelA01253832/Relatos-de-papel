import { useContext, useState } from "react";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../cart/context";
import { IoIosClose } from "react-icons/io";
import { SideBarContext } from "../context";

export const Navbar = () => {
  const { numberOfItems } = useContext(CartContext);
  const { toggleSideMenu } = useContext(SideBarContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;
    navigate(`/search?term=${searchTerm}`);
  };

  return (
    <nav className="flex px-6 py-4 justify-between items-center w-full bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link to="/" className="flex items-center">
          <img
            src="/books.webp"
            alt="Relatos de papel logo"
            className="w-16 h-16 object-cover"
          />
          <div className="ml-2 text-3xl">
            <span className="antialiased font-bold text-gray-800">
              Relatos de Papel
            </span>
            <span className="text-gray-600"> | Shop</span>
          </div>
        </Link>
      </div>

      {/* Search bar */}
      <div className="flex items-center space-x-4">
        {isSearchVisible ? (
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-1 shadow-sm bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
            <input
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => (e.key === "Enter" ? onSearchTerm() : null)}
              placeholder="Search"
              type="text"
              className="bg-transparent outline-none flex-1 text-sm text-gray-700"
            />
            <button
              onClick={() => setIsSearchVisible(false)}
              className="text-gray-500 hover:text-gray-800"
            >
              <IoIosClose className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsSearchVisible(true)}
            className="text-gray-600 hover:text-gray-800 transition-all"
          >
            <IoSearchOutline className="w-6 h-6" />
          </button>
        )}

        {/* Cart */}
        <Link
          to="/cart"
          className="relative text-gray-600 hover:text-gray-800 transition-all"
        >
          {numberOfItems > 0 && (
            <span className="absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-600 text-white">
              {numberOfItems}
            </span>
          )}
          <IoCartOutline className="w-6 h-6" />
        </Link>

        {/* Menu Button */}
        <button
          onClick={toggleSideMenu}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all text-gray-600 hover:text-gray-800"
        >
          Menu
        </button>
      </div>
    </nav>
  );
};
