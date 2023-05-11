"use client"; // this is a client component 👈🏽
import { MainButton, OutlineBtn } from '@/Components/Modules/Buttons/Buttons';
import { useState } from 'react';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import parse from 'html-react-parser';
import HTMLContent from '@/Components/Modules/HTMLContent/HTMLContent';
const TextEditor = ({state,setState }) => {
  const [content, setContent] = useState('');
  const [jsonData, setJsonData] = useState(null);

  const handleEditorChange = (value) => {
    setContent(value);
  };

  const handleExport = () => {
    if (content) {
      const data = { content };
      setJsonData(data);
    }
  };
  const jsonDataa = {
    content: "<h1>asdfadsfasdf</h1><p>asdadsga</p><ol><li>asdg</li><li>gasdg</li><li>agasd</li><li>gadsg</li><li>asg</li><li>adsg</li></ol><blockquote><a href=\"https://web.facebook.com/\" rel=\"noopener noreferrer\" target=\"_blank\">asdfadsgadg</a></blockquote>"
  };
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
      <div className="my-4">
        <h1 className="text-3xl my-4 font-semibold">Export JSON</h1>
        <button onClick={handleExport}>Export</button>
      </div>

      {jsonData && (
        <div className="my-4">
          <h1 className="text-3xl my-4 font-semibold">JSON Data</h1>
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
        )}
    
            {/* <HTMLContent content={jsonDataa.content} /> */}
         
     

   
    </div>
      <div className='flex gap-x-5 justify-end  my-14'>
        <div onClick={() => setState(state - 1)}>
          <OutlineBtn title={"Prev"} />
        </div>{" "}
        <div onClick={() => setState(state + 1)}>
          <MainButton title={"Next"} />
        </div>{" "}
      </div>
    </div>
  )
}

export default TextEditor
