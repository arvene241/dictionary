import React from "react";

const Nonyms = ({ data, title }) => {
  return (
    <div className="my-9 flex items-center gap-5">
      <h2 className="text-[#757575] text-sm md:text-base">{title}</h2>
      <p className="text-[#A445ED] text-sm md:text-base">{data.join(', ')}</p>
    </div>
  );
};

export default Nonyms;
