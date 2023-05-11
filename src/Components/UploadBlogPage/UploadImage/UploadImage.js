import { MainButton, OutlineBtn } from "@/Components/Modules/Buttons/Buttons";
import compressImage from "@/Components/Modules/ImageCompressor/ImageCompressor";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineCloudUpload } from "react-icons/ai";

const UploadImage = ({ state, setState }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState("");
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    } else {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);

      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [selectedFile]);
  // For Preview
  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    } else {
      const file = e.target.files[0];
      const fileSizeInBytes = file?.size;
      const fileSizeInMB = fileSizeInBytes ? fileSizeInBytes / 1024 : 0;
      const maxFileSizeInMB = 1024;
      if (fileSizeInMB > maxFileSizeInMB) {
        toast.error(`Please upload a photo under ${maxFileSizeInMB}KB`);
      } else {
        setSelectedFile(file);
      }
    }
  };

  return (
    <div>
      <div className="w-full">
        <div className="flex w-full relative  my-4 ">
          {preview ? (
            <div className="relative rounded-2xl overflow-hiddens">
              <Image
                width={300}
                height={200}
                src={preview}
                className="rounded-xl  w-full h-full"
                alt=""
              />
              <button
                onClick={() => setPreview(undefined)}
                className="absolute bg-gray-300 text-gray-900 rounded-full w-6 h-6 top-4 left-4"
              >
                ✕
              </button>
            </div>
          ) : (
            <>
              <div className="relative py-10 w-full flex flex-col justify-center items-center border-2 p-4 border-gray-500">
                <AiOutlineCloudUpload className="text-9xl text-center text-zinc-700" />
                <input
                  type="file"
                  onChange={onSelectFile}
                  className="w-full h-full absolute top-0 left-0 opacity-0"
                />
                <p className="text-xl font-semibold">
                  Upload an Image{" "}
                  <span className="text-xs">(Maximum Size 1 mb)</span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <button onClick={handleCompressAndHost}>Compress</button>
      <div className="flex gap-x-5 justify-end  my-14">
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
