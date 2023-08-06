import Image from "next/image";
import image1 from "../../Assets/blogs/gmy-friday-image-1.png";
import image2 from "../../Assets/blogs/gmy-friday-image-2.png";
import image3 from "../../Assets/blogs/gmy-friday-image-3.png";
import image4 from "../../Assets/blogs/gmy-friday-image-4.png";
import image5 from "../../Assets/blogs/gmy-friday-image-5.png";
import image6 from "../../Assets/blogs/gmy-friday-image-6.png";
import image7 from "../../Assets/blogs/gmy-friday-image-7.png";
import image8 from "../../Assets/blogs/gmy-friday-image-8.png";
import main from "../../Assets/blogs/gymfridaya-blogs-main.png";
import { MainButton } from "@/Components/Modules/Buttons/Buttons";
import Link from "next/link";
import { blogsData } from "@/Components/HomePage/Blogs/Blogs";
import {
  BlogsCard,
  HorizontalMiniBlogCard,
} from "@/Components/Modules/BlogsCard/BlogsCard";

const Blogs = () => {
  return (
    <section className="px-4 md:px-10  py-8">
      <div className="grid gap-8 grid-cols-7">
        <div className="col-span-7 md:col-span-4">
          {/* Main Card */}
          <div className="bg-white">
            <div>
              <Image src={main} alt="" />
            </div>
            <div className="p-4">
              <h1 className="text-xl md:text-4xl my-2  md:my-4 font-semibold">
                The Ultimate Guide to Fitness: Tips, Workouts, and Nutrition
              </h1>
              <p className="md:text-lg text-zinc-500 text-xs mb-2 md:mb-4">
                The guide includes a variety of workouts, such as strength
                training, cardio, and yoga, to suit different fitness levels and
                preferences. It also provides helpful tips on proper nutrition,
                including the importance of a balanced diet and the benefits of
                staying hydrated.
              </p>
              <Link href="/blogdetails">
                <MainButton title={"Read More"} />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-7 md:col-span-3">
          <h1 className="mb-4 text-2xl font-semibold">Fetured Articles</h1>
          <div className="w-full h-[2px] bg-gray-600"></div>
          {blogsData.map(data => (
            <HorizontalMiniBlogCard blog={data} key={data.id} />
          ))}
        </div>
      </div>

      <div className="flex gap-x-4 items-center my-8">
        <h1 className="text-2xl font-semibold whitespace-nowrap">
          Latest Articles
        </h1>
        <div className="w-full h-[3px] bg-zinc-300"></div>
      </div>
      <div className="grid gap-10 mt-10 grid-cols-1 md:gird-cols-2 lg:grid-cols-3 ">
        {blogsData.map(data => (
          <BlogsCard blog={data} key={data.id} />
        ))}
        {blogsData.map(data => (
          <BlogsCard blog={data} key={data.id} />
        ))}
      </div>


      <div className="flex gap-x-4 items-center my-8">
        <h1 className="text-2xl font-semibold whitespace-nowrap">
        Recommended Blogs
        </h1>
        <div className="w-full h-[3px] bg-zinc-300"></div>
      </div>
      <div className="grid gap-10 mt-10 grid-cols-1 md:gird-cols-2 lg:grid-cols-3 ">
        {blogsData.map(data => (
          <BlogsCard blog={data} key={data.id} />
        ))}
        {blogsData.map(data => (
          <BlogsCard blog={data} key={data.id} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
