import React from "react";
import Definition from "./Definition";

const Meaning = ({ partOfSpeech, definitions }) => {
  return (
    <div className="my-9">
      <div className="flex items-center gap-5">
        <h2 className="text-lg md:text-2xl text-black font-bold dark:text-white">{partOfSpeech}</h2>
        <div className="border border-solid border-black w-full dark:border-[#e9e9e9]"></div>
      </div>
      <Definition definitions={definitions} />
    </div>
  );
};

export default Meaning;
