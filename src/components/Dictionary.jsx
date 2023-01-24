import { BiPlay } from "react-icons/bi";

const Dictionary = ({ dictionary, setDictionary }) => {
  let audio = new Audio(dictionary[0]?.phonetics[0]?.audio);

  const start = () => {
    audio.play();
  };

  return (
    <div>
      <div>
        <h1>{dictionary[0]?.word}</h1>
        <h2>{dictionary[0]?.phonetic}</h2>
        {console.log(dictionary)}
        <div>
          <button onClick={start} className="bg-[#A069A0] rounded-full p-3">
            <BiPlay className="w-8 h-8 text-[#D357D3]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dictionary;
