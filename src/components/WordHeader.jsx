import React from "react";
import PlayButton from "./PlayButton";

const WordHeader = ({ word, phonetic, audioLink }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <h1 className="text-6xl font-bold text-[#2d2d2d]">{word}</h1>
        {phonetic && (
          <p className="text-2xl font-normal text-[#a445ed] mt-4">{phonetic}</p>
        )}
      </div>
      <PlayButton audioLink={audioLink} />
    </div>
  );
};

export default WordHeader;
