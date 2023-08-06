import { AiOutlineArrowRight } from "react-icons/ai";

const MainButton = ({ title }) => {
  return (
    <div>
      <button type="submit"  className="bg-[#F34E3A] font-medium my-2 text-white px-3 md:px-4 py-1.5 md:py-2 items-center md:text-lg text-sm flex gap-x-2 ">
        {title} <AiOutlineArrowRight />
      </button>
    </div>
  );
};


const OutlineBtn = ({ title }) => {
  return (
    <>
      <button className="border border-[#F34E3A] my-2 text-[#F34E3A] px-4 py-2 items-center flex gap-x-2 ">
        {title} <AiOutlineArrowRight />
      </button>
    </>
  )

}
export { MainButton,OutlineBtn };
