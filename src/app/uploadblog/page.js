"use client"; // this is a client component 👈🏽

import MetaData from "@/Components/UploadBlogPage/MetaData/MetaData";
import Preview from "@/Components/UploadBlogPage/Preview/Preview";
import ProgressBar from "@/Components/UploadBlogPage/ProgressBar/ProgressBar";
import TextEditor from "@/Components/UploadBlogPage/TextEditor/TextEditor";
import UploadImage from "@/Components/UploadBlogPage/UploadImage/UploadImage";
import { useState, useReducer } from "react";

const UploadBlog = () => {
  const [progress, setprogress] = useState(1);

  const initialState = {
    title: "",
    tags: [],
    catagory: 0,
    images: [],
    description: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case "SELECT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case "ADD_IMAGE":
        return {
          ...state,
          images: [...state.images, action.payload.value],
        };
      case "ADD_TAGS":
        return {
          ...state,
          tags: [...state.tags, action.payload.value],
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);
  // console.log(progress);
  return (
    <div className="max-w-[800px] p-10 relative mx-auto">
      <ProgressBar state={progress} />

      {progress === 1 && (
        <>
          <MetaData
            progresState={progress}
            state={state}
            dispatch={dispatch}
            setState={setprogress}
          />
        </>
      )}
      {progress === 2 && (
        <>
          <TextEditor
            progresState={progress}
            dispatch={dispatch}
            setState={setprogress}
          />
        </>
      )}
      {progress === 3 && (
        <>
          <UploadImage
            progresState={progress}
            state={state}
            dispatch={dispatch}
            setState={setprogress}
          />
        </>
      )}
      {progress === 4 && (
        <>
          <Preview progresState={progress} setState={setprogress} />
        </>
      )}
    </div>
  );
};

export default UploadBlog;
