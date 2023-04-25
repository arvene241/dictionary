import React from "react";
import { BiBook, BiMoon, BiSun } from "react-icons/bi";

const Header = ({darkMode, toggle}) => {
  return (
    <div className="flex items-center justify-between">
      <BiBook className="w-8 h-8 cursor-pointer dark:fill-[#757575]" />
      <nav className="flex items-center">
        <button onClick={toggle}>
          {darkMode ? (
            <BiSun className="w-8 h-8 cursor-pointer dark:fill-[#A445ED]" />
          ) : (
            <BiMoon className="w-8 h-8 cursor-pointer dark:fill-[#A445ED]" />
          )}
        </button>
      </nav>
    </div>
  );
};

export default Header;
