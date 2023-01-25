import React from "react";

const Definition = ({ definitions }) => {
  return (
    <div>
      <h2 className="text-[#757575] text-xl my-6">Meaning</h2>
      <ul className="list-disc mx-10">
        {definitions.map((item) => {
          return (
            <>
              <li className="text-black text-lg mt-3">{item.definition}</li>
              {item.example && <p className="text-[#757575] text-lg">"{item.example}"</p>}
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Definition;
