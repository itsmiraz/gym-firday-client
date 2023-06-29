import Profilebox from "@/Components/Shared/ProfileBox/Profilebox";
import Image from "next/image";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
 

    return (
      
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}

      <div className="container mx-auto grid grid-cols-6">
        <div className="col-span-2">
          <div>
          <Profilebox/>
          </div>
        </div>
        <div className="col-span-4">{children}</div>
      </div>
    </section>
  );
}
