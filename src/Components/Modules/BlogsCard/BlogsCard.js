import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

const BlogsCard = ({ blog }) => {
  const { title, img, details } = blog;

  return (
    <div className="bg-white">
      <div className="w-full overflow-hidden h-72">
        <Image
          alt=""
          src={img}
          className="w-full h-full scale-100 hover:scale-110 transition-all duration-150"
        />
      </div>
      <div className="p-3">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-sm text-zinc-600 my-4">{details.slice(0, 100)}..</p>

        <button className="bg-[#F34E3A] text-white px-4 py-2 flex items-center gap-2">
          Read More <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BlogsCard;
