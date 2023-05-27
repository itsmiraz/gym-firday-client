import Image from "next/image";
import bg from "../../../Assets/Home/gym-friday-hero-bg.png";
import { AiOutlineArrowRight } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="relative">
      <Image src={bg} className="h-full w-full" alt="" />
      <div className="absolute top-0 p-3 md:p-20">
        <h1 className="text-[20px] md:text-[108px] text-white font-medium">
          Make Every <br />
          Friday a GymFriday!
        </h1>
        <p className="text-[#CBCBCB] my-2 md:my-4 text-xs md:text-lg mb-4 md:mb-10">
          At GymFriday, we help you achieve your fitness goals with personalized{" "}
          <br className="md:block hidden" />
          plans and expert guidance.
        </p>
        <button className="bg-[#F34E3A] md:text-lg text-xs text-white px-4 py-2 flex items-center gap-2">
          Read Our Blogs <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
