import React from "react";

const Invalid = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-8">
      <p className="text-6xl md:text-8xl">😕</p>
      <p className="text-[#2d2d2d] text-3xl font-bold dark:text-white">No definitions found</p>
      <p className="text-center text-[#757575] text-sm md:text-lg">
        Sorry, we couldn't find any definitions for the word you were looking
        for. You can head to the web to find out more about your interest, or
        perhaps just search for a different word.
      </p>
    </div>
  );
};

export default Invalid;
