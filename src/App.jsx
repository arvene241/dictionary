import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Dictionary from "./components/Dictionary";

function App() {
  const [dictionary, setDictionary] = useState([]);

  return (
    <div className="max-w-screen-md m-auto">
      <Header />
      <SearchBar dictionary={dictionary} setDictionary={setDictionary} />
      {dictionary && <Dictionary dictionary={dictionary} setDictionary={setDictionary} />}
    </div>
  );
}

export default App;
