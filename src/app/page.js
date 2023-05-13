import Image from "next/image";
import image from "../Assets/gym-firiday-textandicon logo.png";
import Marquee from "react-fast-marquee";
import Head from "next/head";


export default function Home() {
  return (
    <main className="relative select-none h-screen overflow-hidden">
    
   
      <Image alt="" className="w-96 z-50 absolute top-0 left-0 right-0 bottom-0 m-auto" src={image}></Image>
      <Marquee>
        <h1 className="text-outline my-4 text-8xl text-zinc-200 font-bold">
          {" "}
          GYM FRIDAY IS COMING SOON
        </h1>
      </Marquee>
      <Marquee direction="right">
        <h1 className="text-outline my-4 text-8xl text-zinc-200 font-bold">
          {" "}
          GYM FRIDAY IS COMING SOON
        </h1>
      </Marquee>
      <Marquee>
        <h1 className="text-outline  my-4 text-8xl text-zinc-200 font-bold">
          {" "}
          GYM FRIDAY IS COMING SOON
        </h1>
      </Marquee>
      <Marquee direction="right">
        <h1 className="text-outline my-4 text-8xl text-zinc-200 font-bold">
          {" "}
          GYM FRIDAY IS COMING SOON
        </h1>
      </Marquee>
      <Marquee>
        <h1 className="text-outline my-4 text-8xl text-zinc-200 font-bold">
          {" "}
          GYM FRIDAY IS COMING SOON
        </h1>
      </Marquee>
      <Marquee direction="right">
        <h1 className="text-outline my-4 text-8xl text-zinc-200 font-bold">
          {" "}
          GYM FRIDAY IS COMING SOON
        </h1>
      </Marquee>
      <Marquee>
        <h1 className="text-outline my-4 text-8xl text-zinc-200 font-bold">
          {" "}
          GYM FRIDAY IS COMING SOON
        </h1>
      </Marquee>
      <Marquee direction="right">
        <h1 className="text-outline my-4 text-8xl text-zinc-200 font-bold">
          {" "}
          GYM FRIDAY IS COMING SOON
        </h1>
      </Marquee>
    </main>
  );
}
