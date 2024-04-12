import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-white group">
      <div className="max-w-container mx-auto border-t-[1px] pt-3 pb-3">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-teal-500 duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          Copyright 2024 | Echo web Desing | All Rights Reserved |
            <a href="https://echoweb.com/" target="_blank" rel="noreferrer">
            <span className="ml-1 font-medium group-hover:text-primeColor">
              Powered by echoweb.com
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
