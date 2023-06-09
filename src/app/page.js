import Blogs from "@/Components/HomePage/Blogs/Blogs";
import Fetured from "@/Components/HomePage/Fetured/Fetured";
import Hero from "@/Components/HomePage/Hero/Hero";
import Products from "@/Components/HomePage/Products/Products";
import Head from "next/head";

export default function Home() {
  return (
    <main className="">
      <Head>
        <title>Gym Friday</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../assets/favicon/favicon.ico" />
      </Head>
      <Hero />
      <Products />
     <Blogs />
     {/*   <Fetured/> */}
    </main>
  );
}
