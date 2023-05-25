import { MainButton, OutlineBtn } from "@/Components/Modules/Buttons/Buttons";
import React from "react";

const Preview = ({ state, setState }) => {
  return (
    <div>
      <div className="p-10 border-2 m-4">
        <h1 className="text-4xl font-semibold text-zinc-700  text-center">
          Everything is Ready
        </h1>
        <p className="text-sm text-center text-zinc-500 my-3">Click on the publish button to upload your Blog</p>
        <div className="text-center">
          <button className="bg-[#F34E3A] text-center mx-auto my-2 text-white px-4 py-2 items-center flex gap-x-2 ">
            Publish
          </button>
        </div>
      </div>

      <div className="flex gap-x-5 justify-end  my-14">
        <div onClick={() => setState(state - 1)}>
          <OutlineBtn title={"Prev"} />
        </div>{" "}
      </div>
    </div>
  );
};

export default Preview;
