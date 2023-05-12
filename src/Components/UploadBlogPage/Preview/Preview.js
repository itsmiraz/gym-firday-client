import { MainButton, OutlineBtn } from "@/Components/Modules/Buttons/Buttons";
import React from "react";

const Preview = ({ state, setState }) => {
  return (
    <div>

      <div>
        <h1></h1>
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
