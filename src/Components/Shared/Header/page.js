import Image from "next/image";
import logo from "../../../Assets/gymfriday-text-logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-white flex items-center justify-between px-8 sticky top-0 z-50">
      <Image src={logo} alt="" className="w-60" />
      <div className="flex items-center gap-x-8 font-semibold">

        <Link href={'/'}>
        <p>Home</p>
        
        </Link>
        <Link href={'/blogs'}>
        <p>Blogs</p>
        </Link>
        <p>Products</p>
        <p>About</p>
      </div>
    </div>
  );
}
