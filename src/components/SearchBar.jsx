import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) {
      setError(true);
    } else {
      document.activeElement?.blur();
      onSubmit(input);
      setInput("");
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    setError(false);
  };

  const errorMessage = (
    <p className="text-red-400">Whoops, can't be empty...</p>
  );

  return (
    <div className="my-12">
      <form onSubmit={handleSubmit} className="w-full">
        <div
          className={`w-full flex items-center justify-between bg-[#F5F5F5] dark:bg-[#1f1f1f] border-none rounded-xl ${
            error && "border-red-400"
          }`}
        >
          <input
            type="text"
            name="word"
            id="word"
            onChange={handleChange}
            value={input}
            placeholder="Search for any word..."
            className="bg-transparent p-4 w-full block outline-none text-black dark:text-white"
          />
          <FiSearch className="w-6 h-6 mr-4 text-[#A445ED]" />
        </div>
      </form>
      {error && errorMessage}
    </div>
  );
};

export default SearchBar;
