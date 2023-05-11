import React from "react";
import { TbDatabase } from "react-icons/tb";
import { BiDetail } from "react-icons/bi";
import { AiOutlineFileImage, AiFillCheckCircle } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
const ProgressBar = ({ state }) => {
  return (
    <div className="w-full flex relative items-center justify-between">
      {/* Meta */}
      <div>
        <div
          className={`${
            state > 1 ? "bg-[#F34E3A]" : "bg-[#CFCFCF]"
          } transition-all duration-200 flex justify-center items-center w-14 h-14 rounded-full`}
        >
          <TbDatabase className={`${state > 1 ? "text-white" : ""}`} />
        </div>
        <p className="text-center">Meta</p>
      </div>
      <div
        className={` mb-4 bg-zinc-300  relative ease-in-out duration-200 w-full h-[6px] `}
      >
        <div
          className={`absolute duration-300 ease-in-out bg-[#F34E3A] z-50 left-0 top-0 h-[6px] ${
            state > 1 ? "w-full" : "w-0"
          } `}
        ></div>
      </div>

      {/* Details */}
      <div>
        <div
          className={`${
            state > 2 ? "bg-[#F34E3A]" : "bg-[#CFCFCF]"
          } flex justify-center items-center w-14 h-14 rounded-full`}
        >
          <BiDetail className={`${state > 2 ? "text-white" : ""}`} />
        </div>
        <p className="text-center">Details</p>
      </div>
      <div
        className={` mb-4 bg-zinc-300  relative ease-in-out duration-200 w-full h-[6px] `}
      >
        <div
          className={`absolute duration-300 ease-in-out bg-[#F34E3A] z-50 left-0 top-0 h-[6px] ${
            state > 2 ? "w-full" : "w-0"
          } `}
        ></div>
      </div>

      {/* Images */}
      <div>
        <div
          className={`${
            state > 3 ? "bg-[#F34E3A]" : "bg-[#CFCFCF]"
          } flex justify-center items-center w-14 h-14 rounded-full`}
        >
          <AiOutlineFileImage className={`${state > 3 ? "text-white" : ""}`} />
        </div>
        <p className="text-center">Images</p>
      </div>

      <div
        className={` mb-4 bg-zinc-300  relative ease-in-out duration-200 w-full h-[6px] `}
      >
        <div
          className={`absolute duration-300 ease-in-out bg-[#F34E3A] z-50 left-0 top-0 h-[6px] ${
            state > 3 ? "w-full" : "w-0"
          } `}
        ></div>
      </div>

      {/* Preview */}
      <div>
        <div
          className={`${
            state > 4 ? "bg-[#F34E3A]" : "bg-[#CFCFCF]"
          } flex justify-center items-center w-14 h-14 rounded-full`}
        >
          <MdOutlineDone />
        </div>
        <p className="text-center">Preview</p>
      </div>
    </div>
  );
};

export default ProgressBar;
