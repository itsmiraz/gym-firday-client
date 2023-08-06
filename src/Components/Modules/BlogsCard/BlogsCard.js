import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MainButton } from "../Buttons/Buttons";
import Link from "next/link";

const BlogsCard = ({ blog }) => {
  const { title, img, details } = blog;

  return (
    <div className="bg-white">
      <div className="w-full overflow-hidden 2xl:h-96 md:h-72">
        <Image
          alt=""
          src={img}
          className="w-full h-full scale-100 hover:scale-110 transition-all duration-150"
        />
      </div>
      <div className="p-3">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-sm text-zinc-600 my-4">{details.slice(0, 100)}..</p>

        <Link href={"/blogdetails"}>
          <MainButton title={"Read More"} />
        </Link>
      </div>
    </div>
  );
};

const HorizontalMiniBlogCard = ({ blog }) => {
  const { title, img, details } = blog;

  return (
    <Link href={'/blogdetails'}>
     <div className="my-6 bg-white flex  gap-2">
      <Image className="w-32 md:w-52" src={img} alt="" />
      <div className="p-2">
        <h1 className="text-lg leading-[22px] md:leading-normal md:text-xl font-semibold">{title}</h1>
        <p className="text-xs text-zinc-600 md:text-sm my-2">{details.slice(0,70)}....</p>
        <div className="md:text-lg text-xs flex font-semibold items-end justify-between mt-2">
          <p>Junior Mamba</p>
          <p>12 Feb 2030</p>
      </div>
      </div>
    </div>
    
    </Link>
  );
};

export { BlogsCard, HorizontalMiniBlogCard };
