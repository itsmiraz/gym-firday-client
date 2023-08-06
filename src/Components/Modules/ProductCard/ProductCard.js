import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ product }) => {
  const { productImg, title, price } = product;

  return (
    <div className="bg-white  flex flex-col justify-between md:max-w-[400px]">
      <div className="w-full p-5 md:h-80 overflow-hidden">
        <Image
          src={productImg}
          alt=""
          className="w-full scale-100 hover:scale-110 transition-all duration-200 "
        />
      </div>
      <div className="p-3">
        <h1 className=" md:block hidden text-sm md:text-2xl md:leading-normal leading-[24px] font-semibold text-[#111111]">
          {title.slice(0, 40)}..
        </h1>
        <h1 className="md:hidden block  text-sm md:text-2xl md:leading-normal leading-[18px] font-semibold text-[#111111]">
          {title.slice(0, 30)}..
        </h1>
        {/* <p className="text-xs md:leading-normal leading-[16px] text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur sed eos cumque porro deserunt repellendus eaque magnam recusandae aliquam
        </p> */}
        <div className="flex flex-wrap items-center my-2 justify-between w-full">
          <div className="flex md:text-lg text-[10px] items-center gap-x-1 text-[#F59300]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <span className="text-zinc-600 "> (12)</span>
          </div>
          <h1 className="font-semibold text-sm md:text-2xl text-gray-700">${price}.00</h1>
        </div>
      </div>
      <button className="w-full text-center py-1.5 text-sm md:text-lg md:py-3 font-semibold text-white  bg-[#000921]">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
