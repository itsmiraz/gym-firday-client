import Image from "next/image";
import image1 from "../../../Assets/featured/gym-fiday-image-1.png";
import image2 from "../../../Assets/featured/gym-fiday-image-2.png";
import image3 from "../../../Assets/featured/gym-fiday-image-3.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Fetured = () => {
  return (
    <section className="px-10 ">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Products and Blogs</h1>
      </div>

      <div className="grid gap-10 my-10 grid-cols-5">
        <div className="h-full relative w-full bg-white overflow-hidden col-span-2">
          <Image
            src={image1}
            className="h-full w-full scale-100 hover:scale-110 transition-all  duration-300"
            alt=""
          />
          <div className="absolute bottom-0 left-0 p-4">
            <h1 className="text-4xl text-white">
              Fitness Tips and Tricks Related Blogs
            </h1>
            <button className="bg-[#F34E3A] text-white px-4 py-2 flex my-4 items-center gap-2">
              Read Our Blogs <AiOutlineArrowRight />
            </button>
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-1 gap-10 w-full h-full">
          <div className="relative overflow-hidden bg-white ">
            <Image
              className="h-full w-full scale-100 hover:scale-110 transition-all  duration-300"
              src={image2}
              alt=""
            />
            <div className="absolute bottom-0 left-0 p-4">
              <h1 className="text-4xl text-white">
                Fitness Tips and Tricks Related Blogs
              </h1>
              <button className="bg-[#F34E3A] text-white px-4 py-2 flex my-4 items-center gap-2">
                Show All <AiOutlineArrowRight />
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden bg-white ">
            <Image
              className="h-full w-full scale-100 hover:scale-110 transition-all  duration-300"
              src={image3}
              alt=""
            />
            <div className="absolute bottom-0 left-0 p-4">
              <h1 className="text-4xl text-white">
                Fitness Tips and Tricks Related Blogs
              </h1>
              <button className="bg-[#F34E3A] text-white px-4 py-2 flex my-4 items-center gap-2">
                Show All <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fetured;
