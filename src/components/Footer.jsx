import React from "react";
import { BiLinkExternal } from "react-icons/bi";

const Footer = ({ link }) => {
  return (
    <div className="flex items-center gap-5 border-t border-solid border-[#e9e9e9] overflow-hidden">
      <p className="underline text-[#757575] pt-4 text-sm md:text-base">Source</p>
      <a className="underline pt-4 flex items-center gap-1 text-[#2d2d2d] text-sm md:text-base dark:text-white" href={link} target="_blank">
        {link} <BiLinkExternal className="text-[#2d2d2d] dark:text-white" />
      </a>
    </div>
  );
};

export default Footer;
