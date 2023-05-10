import { BlogsCard } from "@/Components/Modules/BlogsCard/BlogsCard";
import image1 from "../../../Assets/blogsIamges/gymfriday-blog-image-1.png";
import image2 from "../../../Assets/blogsIamges/gymfriday-blog-image-2.png";
import image3 from "../../../Assets/blogsIamges/gymfriday-blog-image-3.png";

export const blogsData = [
  {
    id: 1,
    title: "10 Tips for Getting Fit and Healthy in 2023",
    img: image1,
    details:
      "The Ultimate Guide to Fitness: Tips, Workouts, and Nutrition is an all-encompassing resource for anyone looking to achieve a healthy, fit lifestyle. This comprehensive guide covers",
  },
  {
    id: 2,
    title: "How to Achieve Your Fitness Goals: A Step-by-Step Guide",
    img: image2,
    details:
      "The Ultimate Guide to Fitness: Tips, Workouts, and Nutrition is an all-encompassing resource for anyone looking to achieve a healthy, fit lifestyle. This comprehensive guide covers",
  },
  {
    id: 3,
    title: "Workouts for Busy People: How to Stay Fit with a Busy Schedule",
    img: image3,
    details:
      "The Ultimate Guide to Fitness: Tips, Workouts, and Nutrition is an all-encompassing resource for anyone looking to achieve a healthy, fit lifestyle. This comprehensive guide covers",
  },
];

const Blogs = () => {
  return (
    <section className="px-10 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Gym Friday Blog’s</h1>
        <p className="text-sm cursor-pointer">View All</p>
          </div>
          <div className='grid gap-10 mt-10 grid-cols-1 md:gird-cols-2 lg:grid-cols-3 '>
                {
                    blogsData.map((data) => <BlogsCard blog={ data} key={data.id} />)
                }
            </div>
    </section>
  );
};

export default Blogs;
