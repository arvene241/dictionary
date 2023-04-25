import React from "react";

const Definition = ({ definitions }) => {
  return (
    <div>
      <h2 className="text-[#757575] text-base md:text-xl my-6">Meaning</h2>
      <ul className="list-disc mx-10">
        {definitions.map((item, index) => {
          return (
            <div key={index}>
              <li className="text-black text-sm md:text-lg mt-3 dark:text-white">{item.definition}</li>
              {item.example && <p className="text-[#757575] text-sm md:text-lg">"{item.example}"</p>}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Definition;
