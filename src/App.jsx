import { useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Dictionary from "./components/Dictionary";
import useGetData from "./hooks/useGetData";

function App() {
  const [word, getData] = useGetData();

  useEffect(() => {
    getData("hello");
  }, []);

  const render = word.empty ? null : <Dictionary data={word} />;

  return (
    <div className="max-w-screen-sm min-h-screen m-auto px-2 py-12">
      <Header />
      <SearchBar onSubmit={getData} />
      {render}
    </div>
  );
}

export default App;
