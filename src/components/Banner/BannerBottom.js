import React from "react";
import { CgAdd } from "react-icons/cg";
import { CgRedo } from "react-icons/cg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { security, rerute_icon, shipping_icon, free_shopping_icon } from "../../assets/images";
const BannerBottom = () => {
  return (
    <div className="w-full bg-white border-b-[1px] py-4 border-b-teal-400 px-4">
      <div className="max-w-container mx-auto h-20 flex flex-col md:flex-row justify-between items-center">
      <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md py-2 px-3 rounded-md  duration-300">
          <span className="text-5xl text-center w-10 ml-1 text-orange-500">
            <img src={shipping_icon} />
          </span>
          <p className="text-xl text-lightText text-base">
            Fastest transpotation <br />{" "}
            <span className="text-xs text-lightText text-base">
              2$ every where in cambodia
            </span>
          </p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md py-2 px-3 rounded-md  duration-300">
          <span className="text-5xl text-center w-10 ml-1 text-orange-500">
            <img src={free_shopping_icon} />
          </span>
          <p className="text-xl text-lightText text-base">
            Free shipping <br />{" "}
            <span className="text-xs text-lightText text-base">
              Free Shipping World Wide
            </span>
          </p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md py-2 px-3 rounded-md  duration-300">
          <span className="text-2xl  text-center w-10">
            <img src={rerute_icon} />
          </span>
          <p className="text-lightText text-base">Return policy in 30 days</p>
        </div>
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md py-2 px-3 rounded-md  duration-300">
          <span className="text-2xl  text-center w-10">
            <img src={security} />
          </span>
          <p className="text-lightText text-base">Return policy in 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
