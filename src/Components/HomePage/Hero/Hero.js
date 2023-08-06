import Image from "next/image";
import bg from "../../../Assets/Home/gym-friday-hero-bg.png";
import { AiOutlineArrowRight } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="relative">
      <div className="md:h-[700px] md:mb-0 mb-10 md:overflow-hidden">
        <Image src={bg} className=" w-full scale-150" alt="" />
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 p-3 md:p-20">
        <h1 className="text-[24px] mt-6 md:text-[108px] md:leading-[110px] text-white font-medium">
          Make Every <br />
          Friday a GymFriday!
        </h1>
        <p className="text-[#CBCBCB] my-2 md:my-4 text-[10px] md:text-lg md:leading-[24px] font-normal mb-4 md:mb-10">
          At GymFriday, we are committed to helping you achieve your fitness
        <br className="md:block hidden" />
          goals with personalized plans and expert guidance. Our team of highly 
        <br className="md:block hidden" />
          skilled and certified trainers is dedicated to tailoring workout 
        <br className="md:block hidden" />
          
          routines and nutrition plans to suit your individual needs and
          aspirations.
        </p>
        <button className="bg-[#F34E3A] md:text-lg text-xs text-white px-4 py-2 flex items-center gap-2">
          Read Our Blogs <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
