import Image from "next/image";
import cover from "../../Assets/blogPage/cover.png";
import avater from "../../Assets/avater.png";
import randomimg from "../../Assets/random/gym-friday-random.png";

const Blogs = () => {
  return (
    <section className="px-10">
      <div className="h-[500px] py-10 relative overflow-hidden">
        <Image src={cover} alt="" />
        <div className="absolute bottom-0 p-10">
          <h1 className="text-7xl font-semibold text-white">
            Best Ways of Gaining <br /> Weight in 2023
          </h1>
        </div>
      </div>

      <div className=" my-10">
        <div className="w-full h-[2px] bg-gray-300 my-2"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <Image className="w-20 " src={avater} alt="" />
            <div>
              <h1 className="text-xl font-semibold">Tasfiya Akter Fimu</h1>
              <p>Auhter</p>
            </div>
          </div>
          <h1 className="text-xl font-semibold">
            Published Date: 13 - Feb - 2002
          </h1>
        </div>
        <div className="w-full h-[2px] bg-gray-300 my-2"></div>
      </div>

      <div>
        <p className="text-xl font-medium text-zinc-800">
          A healthy approach to gaining weight involves gaining a balanced
          amount of muscle mass and subcutaneous fat rather than a lot of
          unhealthy belly fat (4). A recent animal study suggests that belly fat
          may be correlated with increased cancer risk (5). A high percentage of
          body fat also increases your chances of developing type 2 diabetes and
          other health problems, even if you are not overweight (6, 7). To gain
          weight safely, focus on eating more nutrient-dense foods and living an
          overall healthy lifestyle that involves exercising, getting enough
          sleep, and reducing stress, if you can. This article outlines simple
          strategies to quickly gain weight — without increasing your risk of
          disease.
        </p>
        <p className="text-2xl my-10 font-medium text-zinc-800">
          If youre looking to gain weight in a healthy way, here are some
          effective strategies you can follow in 2023:
        </p>
        <ol className="list-decimal space-y-4 px-10 text-xl font-medium text-zinc-800">
          <li className="my-2">
            Eat more calories than you burn: In order to gain weight, you need
            to consume more calories than you burn. Start by calculating your
            daily calorie needs using an online calculator and aim to consume
            300-500 calories above that number.
          </li>
          <li className="my-2">
            Focus on nutrient-dense foods: Choose foods that are high in
            nutrients and calories, such as nuts, seeds, avocados, cheese, whole
            grains, and lean protein sources like chicken, fish, and beans.
          </li>
          <li className="my-2">
            Eat frequently: Instead of eating three large meals a day, aim to
            eat 5-6 smaller meals throughout the day. This will help you consume
            more calories without feeling overly full.
          </li>
          <li className="my-2">
            Incorporate strength training: Lifting weights or doing bodyweight
            exercises like push-ups and squats can help you build muscle mass,
            which will contribute to weight gain.
          </li>
          <li className="my-2">
            Get enough sleep: Aim for 7-9 hours of sleep per night, as lack of
            sleep can hinder weight gain by affecting your appetite and energy
            levels.
          </li>
          <li className="my-2">
            Get enough sleep: Aim for 7-9 hours of sleep per night, as lack of
            sleep can hinder weight gain by affecting your appetite and energy
            levels.
          </li>
          <li className="my-2">
            Consider supplements: Some supplements, such as protein powder or
            creatine, may be helpful in gaining weight. However, its important
            to consult with a healthcare professional before starting any new
            supplement regimen.
          </li>
        </ol>
        <p className="text-2xl my-10 font-medium text-zinc-800">
          Remember that gaining weight in a healthy way takes time and
          consistency. Be patient and consistent with your efforts, and consult
          with a healthcare professional if you have any concerns or questions.
        </p>
      </div>

      <div>
        <Image src={randomimg} alt="" className="my-10" />
      </div>
      <h1 className="text-2xl font-semibold">
        What does it mean to be ’underweight‘?
      </h1>
      <p className="text-xl font-medium my-10 text-zinc-800">
        The clinical definition of underweight is having a body mass index (BMI)
        below 18.5. This is estimated to be less than the body mass needed to
        sustain optimal health (10Trusted Source). However, keep in mind that
        there are many problems with the BMI scale, which only looks at weight
        and height. It does not take muscle mass into account. People can have
        different BMIs and body types and still be healthy. Being underweight
        according to this scale does not necessarily mean that you have a health
        problem. According to the Centers for Disease Control and Prevention
        (CDC), being underweight is about twice as common among women compared
        with men. In a U.S. survey that grouped participants into men and women,
        1.3% of men and 2% of women 20 years and older are underweight (9Trusted
        Source)
      </p>
    </section>
  );
};

export default Blogs;
