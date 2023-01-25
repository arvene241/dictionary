import { useState } from "react";
import { BiBook, BiMoon, BiSun } from "react-icons/bi";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <BiBook className="w-8 h-8 cursor-pointer" />
      <nav className="flex items-center">
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <BiSun className="w-8 h-8 cursor-pointer" />
          ) : (
            <BiMoon className="w-8 h-8 cursor-pointer" />
          )}
        </button>
      </nav>
    </div>
  );
};

export default Header;
