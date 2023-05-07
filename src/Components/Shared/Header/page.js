import Image from "next/image";
import logo from "../../../Assets/gymfriday-text-logo.png";

export default function Header() {
  return (
    <div className="bg-white flex items-center justify-between px-8 sticky top-0 z-50">
      <Image src={logo} alt="" className="w-60" />
      <div className="flex items-center gap-x-8 font-semibold">
        <p>Home</p>
        <p>Blogs</p>
        <p>Products</p>
        <p>About</p>
      </div>
    </div>
  );
}
