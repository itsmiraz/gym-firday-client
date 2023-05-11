"use client"; // this is a client component 👈🏽

import MetaData from "@/Components/UploadBlogPage/MetaData/MetaData";
import Preview from "@/Components/UploadBlogPage/Preview/Preview";
import ProgressBar from "@/Components/UploadBlogPage/ProgressBar/ProgressBar";
import TextEditor from "@/Components/UploadBlogPage/TextEditor/TextEditor";
import UploadImage from "@/Components/UploadBlogPage/UploadImage/UploadImage";
import { useState,useReducer } from "react";

const UploadBlog = () => {
  const [progress, setprogress] = useState(1);

  const initialState = { 

    title: "",
    tags: [],
    catagory: 0,
    image: '',
    description: ''
    


   };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INPUT':
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case 'SELECT':
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case 'ADD_TAGS':
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      default:
        return state;
    }
  };
const [state, dispatch] = useReducer(reducer, initialState);

  
console.log(state);

  return (
    <section className="p-10">
      <div className="max-w-[800px] mx-auto">

        <ProgressBar state={progress}/>

        {progress === 1 && (
          <>
            <MetaData state={ progress} dispatch={dispatch} setState={setprogress} />
          </>
        )}
        {progress === 2 && (
          <>
            <TextEditor state={ progress} dispatch={dispatch}  setState={setprogress}/>
          </>
        )}
        {progress === 3 && (
          <>
            <UploadImage state={ progress} dispatch={dispatch}  setState={setprogress} />
          </>
        )}
        {progress === 4 && (
          <>
            <Preview state={ progress} setState={setprogress}/>
          </>
        )}
      </div>
    </section>
  );
};

export default UploadBlog;
