"use client"; // this is a client component 👈🏽
import { MainButton, OutlineBtn } from '@/Components/Modules/Buttons/Buttons';
import { useState } from 'react';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'



const TextEditor = ({ state, setState, dispatch }) => {
  // States
  const [content, setContent] = useState('');
  const [jsonData, setJsonData] = useState(null);

  // Functions
  const handleEditorChange = (value) => {
    setContent(value);
  };

  


  const handleNext = () => {
      if (content) {
        const data = { content };
        setJsonData(data);
      }
    dispatch({
      type: 'INPUT',
      payload: { name: 'description', value: jsonData.content }
    })
    setState(state + 1)
  }

  // Modules for Text Editor
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'align': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['blockquote',],
      ['link'],

    ]
  }
  return (

    <div className='my-4'>
      <div>
        <div className="my-4">
          <h1 className="text-3xl my-4 font-semibold">Description</h1>
          <ReactQuill
            value={content}
            onChange={handleEditorChange}
            modules={modules}
            className="h-80"
            theme="snow"
          />
        </div>





      </div>
      <div className='flex gap-x-5 justify-end  my-14'>
        <div onClick={() => setState(state - 1)}>
          <OutlineBtn title={"Prev"} />
        </div>{" "}
        <div onClick={handleNext}>
          <MainButton title={"Next"} />
        </div>{" "}
      </div>
    </div>
  )
}

export default TextEditor
