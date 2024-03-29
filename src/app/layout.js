import Header from "@/Components/Shared/Header/page";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/Components/Shared/Footer/page";
import { Toaster } from "react-hot-toast";
import UserContext from "@/Context/UserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gym Friday",
  description:
    "Gym Friday is a website where you can find tips and blogs about fitness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContext>
        <div className="max-w-[1920px] mx-auto transition-all duration-300 ease-in-out">
          <Header />
          {children}
          <Footer />
          <Toaster/>
        </div>

        </UserContext>
      </body>
    </html>
  );
}
