import { MainButton, OutlineBtn } from "@/Components/Modules/Buttons/Buttons";
import React from "react";

const Preview = ({ state, setState }) => {
  return (
    <div>
      <p>Preview</p>
      <div className="flex gap-x-5 justify-end  my-14">
        <div onClick={() => setState(state - 1)}>
          <OutlineBtn title={"Prev"} />
        </div>{" "}
       
      </div>
    </div>
  );
};

export default Preview;