"use client"; // this is a client component 👈🏽
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const TextEditor = () => {
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'font': [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['blockquote', 'code-block'],
      ['link'],
      ['clean']
    ]
  }
  return (
    <ReactQuill
      modules={modules}
      theme="snow"
    />
  )
}

export default TextEditor
