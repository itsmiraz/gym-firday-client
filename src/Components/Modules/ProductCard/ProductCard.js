import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ product }) => {
  const { productImg, title, price } = product;

  return (
    <div className="bg-white">
      <div className="w-full p-5 h-32 md:h-80 overflow-hidden">
        <Image
          src={productImg}
          alt=""
          className="w-full scale-100 hover:scale-110 transition-all duration-200 "
        />
      </div>
      <div className="p-3">
        <h1 className="text-sm md:text-2xl font-semibold text-[#111111]">
          {title.slice(0, 40)}..
        </h1>
        <div className="flex flex-wrap items-center my-2 justify-between w-full">
          <div className="flex md:text-lg text-xs items-center gap-x-1 text-[#F59300]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <span className="text-zinc-600 "> (12)</span>
          </div>
          <h1 className="font-semibold text-lg md:text-2xl text-gray-700">${price}.00</h1>
        </div>
      </div>
      <button className="w-full text-center py-1.5 text-sm md:text-lg md:py-3 font-semibold text-white  bg-[#000921]">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
