"use client"; // this is a client component 👈🏽

import MetaData from "@/Components/UploadBlogPage/MetaData/MetaData";
import Preview from "@/Components/UploadBlogPage/Preview/Preview";
import ProgressBar from "@/Components/UploadBlogPage/ProgressBar/ProgressBar";
import TextEditor from "@/Components/UploadBlogPage/TextEditor/TextEditor";
import UploadImage from "@/Components/UploadBlogPage/UploadImage/UploadImage";
import { useState } from "react";

const UploadBlog = () => {
  const [state, setState] = useState(1);

  return (
    <section className="p-10">
      <div className="max-w-[800px] mx-auto">

        <ProgressBar state={state}/>

        {state === 1 && (
          <>
            <MetaData state={ state} setState={setState} />
          </>
        )}
        {state === 2 && (
          <>
            <TextEditor state={ state} setState={setState}/>
          </>
        )}
        {state === 3 && (
          <>
            <UploadImage state={ state} setState={setState} />
          </>
        )}
        {state === 4 && (
          <>
            <Preview state={ state} setState={setState}/>
          </>
        )}
      </div>
    </section>
  );
};

export default UploadBlog;
