import { MainButton, OutlineBtn } from "@/Components/Modules/Buttons/Buttons";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { HashLoader } from "react-spinners";

const cloudinary_Name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

const UploadImage = ({ state, setState, dispatch, progresState }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [animation, setanimation] = useState(false);
console.log(state.images);
  useEffect(() => {
    if (selectedFiles.length === 0) {
      setPreviews([]);
      return;
    } else {
      const objectUrls = selectedFiles.map(file => URL.createObjectURL(file));
      setPreviews(objectUrls);

      // free memory when the component is unmounted
      return () => {
        objectUrls.forEach(url => URL.revokeObjectURL(url));
      };
    }
  }, [selectedFiles]);

  // Handle Selected File
  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFiles([]);
      return;
    } else {
      const selectedFilesArray = Array.from(e.target.files);
      const fileSizes = selectedFilesArray.map(file => file.size / 1024);
      const isOverSizeLimit = fileSizes.some(size => size > 500);

      if (isOverSizeLimit) {
        toast.error("Please upload photos under 500kb");
      } else {
        setSelectedFiles(prevSelectedFiles => [
          ...prevSelectedFiles,
          ...selectedFilesArray,
        ]);
      }
    }
  };

  // Function to upload an image to Cloudinary
  const uploadImage = file => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "nhei6kfw"); // Replace with your upload preset

    return axios.post(
      `https://api.cloudinary.com/v1_1/dbjro9pqn/image/upload`,
      formData
    );
  };

  // Function to upload an array of images to Cloudinary
  const uploadImagesToCloudinary = async imageFiles => {
    try {
      const uploadPromises = imageFiles.map(file => uploadImage(file));
      const uploadedResponses = await Promise.all(uploadPromises);
      const uploadedUrls = uploadedResponses.map(
        response => response.data.secure_url
      );
      return uploadedUrls;
    } catch (error) {
      console.error("Error uploading images:", error);
      throw error;
    }
  };

  const handleUpload = async () => {
    try {
      setanimation(true);
      const uploadedUrls = await uploadImagesToCloudinary(selectedFiles);
      
    
      dispatch({
        type: "ADD_IMAGE",
        payload: {value: uploadedUrls },
      });
      setState(progresState + 1);
    } catch (err) {
      toast.error("Something went wrong whenUploading Image");
      setanimation(false)
    }
  };

  return (
    <div className="relative">
      {animation && (
        <>
          <div className="bg-black/10 grid place-items-center z-50 absolute w-full h-full left-0 top-0 ">
            <HashLoader color="#F34E3A" />
          </div>
        </>
      )}
      <div className="w-full my-10">
        <div className="w-full  mx-auto">
          <label htmlFor="" className="text-xl my-2 block">
            Images <span className="text-sm text-zinc-800">(Max 3)</span>
          </label>

          <div className="relative ">
            <div className="flex gap-2 flex-wrap">
              {selectedFiles.length < 3 && (
                <div className="relative flex flex-col justify-center items-center border border-gray-400 w-44 text-center rounded-md py-4">
                  <AiOutlineCloudUpload className="text-4xl" />
                  <input
                    required
                    type="file"
                    onChange={onSelectFile}
                    className="w-full h-full opacity-0 top-0 left-0 bg-red-500 absolute"
                  />
                  <p>Upload Photos</p>
                </div>
              )}
           
              {
                state.images.length >0 ? <>
                  {state.images?.map((preview, index) => (
                   
                  
                <div className="relative mx-2 my-2" key={index}>
                      <img src={ preview   } className="rounded w-52" alt="" />
                  <p
                    onClick={() => handlePreviewRemove(index)}
                    className="absolute cursor-pointer bg-gray-100 text-gray-900 rounded-full w-6 h-6 top-2 right-2"
                  >
                    ✕
                  </p>
                </div>
              ))}
                </> :
                  <>
                        {previews?.map((preview, index) => (
                <div className="relative mx-2 my-2" key={index}>
                  <img src={preview} className="rounded w-52" alt="" />
                  <p
                    onClick={() => handlePreviewRemove(index)}
                    className="absolute cursor-pointer bg-gray-100 text-gray-900 rounded-full w-6 h-6 top-2 right-2"
                  >
                    ✕
                  </p>
                </div>
              ))}
                  </>
              }
          
            </div>
          </div>
        </div>

        <div className="flex gap-x-5 justify-end  my-14">
          <div onClick={() => setState(state - 1)}>
            <OutlineBtn title={"Prev"} />
          </div>{" "}
          {selectedFiles.length >0 && (
            <div onClick={handleUpload}>
              <MainButton title={"Next"} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
