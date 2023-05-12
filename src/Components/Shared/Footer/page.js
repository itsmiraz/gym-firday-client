import Image from "next/image";
import logo from "../../../Assets/gymfriday-text-logo.png";

export default function Footer() {
  return (
    <div className="bg-[#000921] grid grid-cols-5 p-10 pt-10">
      <div className="col-span-2">
        <Image src={logo} alt="" className="w-32 bg-white" />
          </div>
          <div>
              <h1 className="text-xl font-semibold text-white">Catagory</h1>
              <div className="text-sm space-y-2 text-zinc-400 my-4">
              <p>
              Blogs
              </p>
              <p>
              About us
              </p>
              <p>
              Products
              </p>
              <p>
              Contact us
              </p>
         </div>
          </div>
          <div>
              <h1 className="text-xl font-semibold text-white">Company</h1>
              <div  className="text-sm space-y-2 text-zinc-400 my-4">
              <p>
              Terms and Conditions
              </p>
              <p>
              Privacy
              </p>
          
             </div>
          </div>
          
          <div>
              <h1 className="text-xl font-semibold text-white">Social</h1>
              <div>
                  
             </div>
          
          </div>
          
    </div>
  );
}
