import { MainButton, OutlineBtn } from "@/Components/Modules/Buttons/Buttons";
import React from "react";

const UploadImage = ({state,setState}) => {
  return (
    <div>
      <h1>Images</h1>
      <div className='flex gap-x-5 justify-end  my-14'>
        <div onClick={() => setState(state - 1)}>
          <OutlineBtn title={"Prev"} />
        </div>{" "}
        <div onClick={() => setState(state + 1)}>
          <MainButton title={"Next"} />
        </div>{" "}
      </div>
    </div>
  );
};

export default UploadImage;
