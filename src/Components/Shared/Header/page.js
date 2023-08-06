"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import logo from "../../../Assets/gymfriday-text-logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { MainButton } from "@/Components/Modules/Buttons/Buttons";
import { AuthContext } from "@/Context/UserContext";
import { toast } from "react-hot-toast";
import { getTokenCookie, removeTokenCookie } from "@/Helpers/cookie";

const Header = () => {
  // States
  const [show, setShow] = useState(false);
  const [showDropDown, setShowDropdown] = useState(false);

  // Global Sates
  const { user, logOut } = useContext(AuthContext);

  const token = getTokenCookie();

  const handleLogout = () => {
    logOut()
      .then(result => {
        toast.success("User Log Outed");
        removeTokenCookie();
      })
      .then(err => {
        console.log(err);
      });
  };

  return (
    <div className="bg-white   flex items-center justify-between px-2 md:px-8 sticky  py-2 top-0 z-50">
      <Image
        priority
        src={logo}
        alt=""
        className="w-32 z-50 relative md:w-60"
      />
      <div
        className={`md:static duration-500 ease-in-out absolute right-0 p-2 bg-white w-full md:justify-end justify-center md:items-end items-center space-y-4 md:space-y-0 py-4 md:py-0 ${
          show ? "top-8 " : "top-[-800px]"
        } flex md:flex-row flex-col md:items-center gap-x-8 font-semibold`}
      >
        <Link   onClick={() => setShow(!show)} href={"/"}>
          <p>Home</p>
        </Link>
        <Link  onClick={() => setShow(!show)}  href={"/blogs"}>
          <p>Blogs</p>
        </Link>
        <p>Products</p>
        <p>About</p>

        {user?.uid ? (
          <div className="relative">
            <Image
              onMouseEnter={() => setShowDropdown(!showDropDown)}
              width={40}
              height={40}
              alt="User Profile"
              className="rounded-full"
              src={"https://www.w3schools.com/howto/img_avatar.png"}
            />

            <div
              className={`absolute text-sm text-zinc-600 ${
                showDropDown ? "block" : "hidden"
              } p-4 top-12 -right-4 bg-white`}
            >
              <Link href={"/dashboard"}>DashBoard</Link>
              <Link href={"/uploadblog"}>
                {" "}
                <p>Upload</p>{" "}
              </Link>
              <p>Setting</p>
              <button onClick={() => handleLogout()}>Log Out</button>
            </div>
          </div>
        ) : (
          <div>
            <Link href={"/auth/login"}>
              <MainButton title={"Login"} />
            </Link>
          </div>
        )}
      </div>

      <div className="md:hidden block" onClick={() => setShow(!show)}>
        {show ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
    </div>
  );
};

export default Header;
