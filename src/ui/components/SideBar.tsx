import { useContext, useState } from "react";
import {
  IoCartOutline,
  IoCloseOutline,
  IoLogInOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { SideBarContext } from "../context";

export const SideBar = () => {
  const { isMenuOpen, toggleSideMenu } = useContext(SideBarContext);
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;
    toggleSideMenu();
    navigate(`/search?term=${searchTerm}`);
  };

  return (
    <div>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {isMenuOpen && (
        <div
          onClick={toggleSideMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        />
      )}

      <nav
        className={`fixed p-5 right-0 top-0 h-screen bg-white z-20 shadow-2xl transform transition-all duration-300 ${
          isMenuOpen ? "w-[500px] translate-x-0" : "w-0 translate-x-full"
        }`}
      >
        {isMenuOpen && (
          <IoCloseOutline
            size={50}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => toggleSideMenu()}
          />
        )}

        {isMenuOpen && (
          <div className="relative mt-14">
            <IoSearchOutline size={20} className="absolute top-2 left-2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => (e.key === "Enter" ? onSearchTerm() : null)}
              placeholder="Search"
              className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
            />
          </div>
        )}

        {isMenuOpen && (
          <Link
            to="/cart"
            className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            onClick={() => toggleSideMenu()}
          >
            <IoCartOutline size={30} />
            <span className="ml-3 text-xl">Cart</span>
          </Link>
        )}

        {isMenuOpen && (
          <Link
            to="/auth/login"
            className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            onClick={() => toggleSideMenu()}
          >
            <IoLogInOutline size={30} />
            <span className="ml-3 text-xl">Sign In</span>
          </Link>
        )}
      </nav>
    </div>
  );
};
