import { MainButton, OutlineBtn } from "@/Components/Modules/Buttons/Buttons";
import React, { useState } from "react";

const MetaData = ({ state, setState, dispatch }) => {
  // Tags State
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  // Add Tags Functions
  const handleInputChange = () => {
    setTagInput(event.target.value);
  };

  const handleTagAddition = () => {
    if (event.key === "Enter" && tagInput.trim() !== "") {
      const newTag = {
        text: tagInput.trim(),
        id: tags.length + 1,
      };
      setTags([...tags, newTag]);
      setTagInput("");
    }
  };
  const handleTagRemoval = id => {
    const updatedTags = tags.filter(tag => tag.id !== id);
    setTags(updatedTags);
  };



  const handleClick = () => {
    dispatch({
      type: 'ADD_TAGS',
      payload:{name:'tags',value:tags}
      
    })
    setState(state+1)

  }

  return (
    <div className="border bg-zinc-200 p-4 my-4">
      <div>
        <h1 className="text-2xl my-4">Meta Data</h1>

        <div>
          <label className="text-xl" htmlFor="">
            Title
          </label>
          <input
            type="text"
            className="w-full py-2 px-4 my-4 focus:outline-[#F34E3A]"
            name="title"
            onBlur={e =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
            id=""
          />
        </div>

        <div>
          <label className="text-xl" htmlFor="">
            Catagory
          </label>
          <select
            onBlur={e =>
              dispatch({
                type: "SELECT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
            name="catagory"
            className="w-full py-2  my-4 px-2 bg-white focus:outline-[#F34E3A]"
          >
            <option disabled>Chosse One</option>
            <option value={1}>Fitness</option>
            <option value={2}>Weight Gain</option>
            <option value={3}>Weight Loss</option>
            <option value={4}>Health Diet</option>
            <option value={5}>Other</option>
          </select>
        </div>

        <div>
          <div className="my-4 ">
            <p className="text-xl">
              Tags <span className="text-xs ">(Maximum 10 tags)</span>
            </p>

            <div className="flex flex-wrap items-center  border rounded py-2">
              <div className="flex flex-wrap items-center ">
                {tags.map(tag => (
                  <div
                    key={tag.id}
                    className="bg-zinc-200 select-none flex justify-between items-center rounded px-2 m-2 py-1 text-gray-900"
                  >
                    <p> {tag.text}</p>
                    <span
                      className="cursor-pointer pl-2"
                      onClick={() => handleTagRemoval(tag.id)}
                    >
                      &times;
                    </span>
                  </div>
                ))}
              </div>
              {tags.length < 10 && (
                <input
                  type="text"
                  id="tag-input"
                  className="flex-grow p-3  focus:outline-[#F34E3A]"
                  placeholder="Type and press enter to add a tag"
                  value={tagInput}
                  onChange={handleInputChange}
                  onKeyDown={handleTagAddition}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end my-4">
        {/* <OutlineBtn title={"Prev"} /> */}
        <div onClick={handleClick}>
          <MainButton title={"Next"} />
        </div>{" "}
      </div>
    </div>
  );
};

export default MetaData;
