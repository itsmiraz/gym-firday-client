import Image from "next/image";
import bg from "../../../Assets/Home/gym-friday-hero-bg.png";
import bgMobile from "../../../Assets/Home/gym-friday-hero-bg.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Hero = () => {
  return (
    <div  className="relative bg-cover bg-center " style={{ backgroundImage: `url(${bg})` }}>
     <Image src={bg} alt="Background" layout="fill" objectFit="cover" />
      <div className="relative z-40 p-3 md:p-20">
        <h1 className="text-[24px] md:text-[108px] md:leading-[110px] text-white font-medium">
          Make Every <br />
          Friday a GymFriday!
        </h1>
        <p className="text-[#CBCBCB] my-2 md:my-4 text-[10px] md:text-lg md:leading-[24px] font-normal mb-4 md:mb-10">
          At GymFriday, we are committed to helping you achieve your fitness
        <br className="md:block hidden" />
          goals with personalized plans and expert guidance. Our team of highly 
        <br className="md:block hidden" />
      <span className="md:inline-block hidden">    skilled and certified trainers is dedicated to tailoring workout 
        <br className="md:block hidden" />
          
          routines and nutrition plans to suit your individual needs and
          aspirations.</span>
        </p>
        <button className="bg-[#F34E3A] md:text-lg text-xs text-white px-4 py-2 flex items-center gap-2">
          Read Our Blogs <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
