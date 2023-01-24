import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({dictionary, setDictionary}) => {
  const [word, setWord] = useState("");

  const handleChange = (event) => {
    setWord(event.target.value);

    console.log("value is:", event.target.value);
  };

  const getDictionaryData = (event) => {
    event.preventDefault();
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((data) => setDictionary(data.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="my-8">
      <form onSubmit={getDictionaryData}>
        <input
          type="text"
          name="word"
          id="word"
          onChange={handleChange}
          value={word}
          className="w-full bg-[#DBE2D9] rounded-xl p-3 outline-none"
          placeholder="Search a word"
        />
      </form>
    </div>
  );
};

export default SearchBar;
