"use client";
import Link from "next/link";
import React, { useContext, useState, useMemo } from "react";
import toast from "react-hot-toast";
import { AiFillEye } from "react-icons/ai";
import { AuthContext } from "@/Context/UserContext";
import { useRouter } from "next/navigation";
import axios from "axios";
import { setTokenCookie } from "@/Helpers/cookie";

const RegisterPage = () => {
  // Global States
  const { signUp, updateUser } = useContext(AuthContext);

  // States
  const [show, setShow] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [error, setError] = useState("");

  
  const router = useRouter();
  const { pathname } = router.query || {};

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // -- Validation

    // if (!/(?=.*[A-Z])/.test(password)) {
    //     setError('Please provide at least two uppercase');
    //     return;
    // }
    if (password.length < 6) {
      setError("Please should be at least 6 characters.");
      return;
    }
    // if (!/(?=.*[!@#$&*])/.test(password)) {
    //     setError('Please add at least one special character');
    //     return;
    // }

    // Start The Animation
    setAnimation(true);

    // Clean Error State
    setError("");

    // Sign Up wiht Email Pass

    signUp(email, password)
      .then(result => {
        const userInfo = {
          displayName: name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(email, name);
            setAnimation(false);

            console.log(email, name, password);
          })
          .catch(err => {
            setAnimation(false);
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
        setAnimation(false);
        setError(err.message);
      });
  };

  const saveUser = (email, name) => {
    const user = {
      name,
      email,
      img: "",
      admin: false,
      moderator: false,
    };

    axios
      .put(`http://localhost:8800/api/auth/user/${email}`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        setTimeout(() => {
          router.replace(pathname || "/");
          toast.success("User Created Successfully");
        }, 200);
          setAnimation(false);
        //   console.log(response.data);
          setTokenCookie(response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="py-20 md:py-20 px-4 md:px-20">
      <div className="grid px-0 md:px-32 grid-cols-1 md:grid-cols-2 gap-10 md:gap-40">
        <div className="w-full   p-8 space-y-3  bg-gray-100 border border-[#F34D3A]/40 shadow-2xl text-gray-800">
          <h1 className="text-2xl font-bold text-[#F34D3A] text-center">
            Register
          </h1>
          <form
            onSubmit={handleSubmit}
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine  ng-valid"
          >
            <div className="space-y-2 text-sm">
              <label htmlFor="name" className="block  font-semibold">
                Full Name
              </label>
              <input
                required
                type="text"
                name="name"
                id="name"
                className="w-full px-4 py-2   bg-white border rounded-md focus:outline-blue-500 border-gray-300 text-gray-700 focus:border-violet-400"
              />
            </div>

            <div className="space-y-2 text-sm">
              <label htmlFor="email" className="block  font-semibold">
                Email
              </label>
              <input
                required
                type="text"
                name="email"
                id="email"
                className="w-full px-4 py-2   bg-white border rounded-md focus:outline-blue-500 border-gray-300 text-gray-700 focus:border-violet-400"
              />
            </div>

            <div className="space-y-2 text-sm">
              <label htmlFor="password" className="block  font-semibold">
                Password
              </label>
              <div className="relative">
                <input
                  required
                  type={show ? "text" : "password"}
                  name="password"
                  id="password"
                  className="w-full px-4 py-2   bg-white border rounded-md focus:outline-blue-500 border-gray-300 text-gray-700 focus:border-violet-400"
                />
                <AiFillEye
                  onClick={() => setShow(!show)}
                  className="absolute right-2 top-3 text-xl cursor-pointer"
                />
              </div>
              <div className="flex justify-end text-xs text-gray-400"></div>
              <div>
                <p className="text-red-500">{error}</p>
              </div>
            </div>
            <button
              type="submit"
              disabled={animation}
              className="block disabled:bg-gray-600 disabled:animate-pulse w-full p-3 text-center  font-semibold text-gray-50 bg-[#F34D3A]"
            >
              {animation ? "Loading" : "Sign Up"}
            </button>
          </form>

          <p className="text-xs text-center sm:px-6 text-gray-400">
            Already have an account?
            <Link
              rel="noopener noreferrer"
              href="/auth/login"
              className="underline text-gray-700"
            >
              Sign IN
            </Link>
          </p>
        </div>
        <div className="order-first text-center md:text-start md:order-last">
          <h1 className="text-3xl font-semibold my-6">
            Welcome to Gym Friday!
          </h1>
          <p className="text-sm md:text-lg text-zinc-400">
            {" "}
            Create your account today and join our thriving bartering community.
            By becoming a member, you gain access to a diverse network of
            individuals ready to engage in mutually beneficial trades.{" "}
            <span className="md:block hidden">
              {" "}
              Experience the excitement of connecting with others who share your
              passion for bartering, and discover endless opportunities to trade
              goods and services. Join MAMbarter now and embark on a journey of
              collaborative exchange unlike any other!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
