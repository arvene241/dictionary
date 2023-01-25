import React, { useMemo } from "react";
import { HiPlay } from "react-icons/hi";

const PlayButton = ({ audioLink }) => {
  const audioObject = useMemo(() => {
    return new Audio(audioLink);
  }, [audioLink]);

  const handleClick = (e) => {
    audioObject.play();
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#D8AFF7] p-2 rounded-full hover:bg-[#A445ED] audioButton active:translate-y-1"
    >
      <HiPlay className="w-16 h-16 text-[#A445ED] playIcon" />
    </button>
  );
};

export default PlayButton;
