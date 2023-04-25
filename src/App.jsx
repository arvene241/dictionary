import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Dictionary from "./components/Dictionary";
import useGetData from "./hooks/useGetData";

function App() {
  const [word, getData] = useGetData();
  const [toggle, setToggle] = useState(false);

  const toggleDarkMode = () => {
    setToggle((toggle) => !toggle);
  };

  useEffect(() => {
    getData("hello");
  }, []);

  const render = word.empty ? null : <Dictionary data={word} />;

  return (
    <div className={`${toggle && "dark"} px-8`}>
      <div className="max-w-screen-sm min-h-screen m-auto px-2 py-12">
        <Header darkMode={toggle} toggle={toggleDarkMode} />
        <SearchBar onSubmit={getData} />
        {render}
      </div>
    </div>
  );
}

export default App;
