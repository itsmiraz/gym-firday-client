import { MainButton, OutlineBtn } from "@/Components/Modules/Buttons/Buttons";
import React from "react";

const MetaData = ({ state, setState }) => {
  return (
    <div>
      <h1>Meta</h1>
      <div className="flex justify-end my-10">
        {/* <OutlineBtn title={"Prev"} /> */}
        <div onClick={() => setState(state + 1)}>
          <MainButton title={"Next"} />
        </div>{" "}
      </div>
    </div>
  );
};

export default MetaData;
