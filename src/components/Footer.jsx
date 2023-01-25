import React from "react";
import { BiLinkExternal } from "react-icons/bi";

const Footer = ({ link }) => {
  return (
    <div className="flex items-center gap-5 border-t border-solid border-[#e9e9e9]">
      <p className="underline text-[#757575] pt-4">Source</p>
      <a className="underline pt-4 flex items-center gap-1 text-[#2d2d2d]" href={link} target="_blank">
        {link} <BiLinkExternal className="text-[#2d2d2d]" />
      </a>
    </div>
  );
};

export default Footer;
