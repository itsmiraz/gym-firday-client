"use client";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { sendPasswordResetEmail } from "firebase/auth";
import { AuthContext } from "@/Context/UserContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { setTokenCookie } from "@/Helpers/cookie";

const Login = () => {
  // Global States
  const { signIn, auth, googleSginIn } = useContext(AuthContext);

 
  // States
  const [error, setError] = useState(null);
  const [usermail, setUsermail] = useState("");
  const [animation, setAnimation] = useState(false);

  // For Navigation
  const router = useRouter();
  const { pathname } = router.query || {};

  // Sign In Fn
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setAnimation(true);

    signIn(email, password)
      .then(result => {
        form.reset();
        setAnimation(false);
        const user = result.user;
        saveUser(user.email, user.displayName);
      })
      .catch(error => {
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          setError("Wrong Password");
        } else if (error.message === "Firebase: Error (auth/user-not-found).") {
          setError("User Not Found Please Register");
        } else {
          setError(error.message);
        }
        setAnimation(false);
      });
  };

  // Sign IN WITH GOOGLE
  const handleGoogleSignIN = () => {
    googleSginIn()
      .then(result => {
        const user = result.user;
        saveUser(user.email, user.displayName);
      })
      .catch(error => {
        console.log("error", error);
      });
  };

  // Handle User Inputs
  const handleEmailInput = e => {
    e.preventDefault();
    const email = e.target.value;

    setUsermail(email);
  };

  // Reset Password
  const resetPasswrd = () => {
    sendPasswordResetEmail(auth, usermail)
      .then(() => {
        toast.success(
          "Please Check Your Email box to reset your Email Password"
        );
      })
      .catch(error => {
        console.log("error", error);
        setError(error.message);
      });
  };

  // Save user to db
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
          toast.success("User Signed In Successfully");
        }, 200);
        const newToken = response.data.data;
        setTokenCookie(newToken);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="flex px-10   justify-center py-10 md:py-20  items-center">
      <div className="relative px-4 md:px-20 gap-10 grid grid-cols-1 md:grid-cols-2 w-full mx-auto">
        <div className="my-10 md:text-start text-center px-0 md:px-10">
          <h1 className="text-3xl md:text-4xl font-medium my-6">
            Welcome to Gym Friday!
          </h1>
          <p className="text-lg text-zinc-400">
            {" "}
            Please log in to access your account and start exploring our
            exciting bartering platform. By logging in, you gain access to a
            vast network of individuals eager to trade goods and services.{" "}
            <span className="md:inline-block hidden">
              {" "}
              Join our community today and unlock the power of bartering with
              Gym Friday!
            </span>
          </p>
        </div>
        <div className="w-full md:w-9/12 mb-10 relative bg-white border mx-auto z-10 border-[#023047]/50 shadow-lg drop-shadow-2xl p-8 space-y-3 bg-white-900 text-gray-900">
          <h1 className="text-2xl text-[#F34D3A] font-bold text-center">
            Login
          </h1>
          <form
            onSubmit={handleSubmit}
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label
                htmlFor="username"
                className="block font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                required
                type="text"
                onBlur={handleEmailInput}
                name="email"
                id="username"
                className="w-full px-4 py-3  border-gray-700 bg-[#F34D3A]/10 text-gray-800 focus:border-violet-9200"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="password"
                className="block font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                required
                type="password"
                name="password"
                id="password"
                className="w-full px-4 py-3  border-gray-700 bg-[#F34D3A]/10 text-gray-800  focus:border-violet-200"
              />
              <div className="flex justify-end text-xs text-gray-400">
                <Link onClick={resetPasswrd} rel="noopener noreferrer" href="/">
                  Forgot Password?
                </Link>
              </div>
              <div>
                <p className="text-red-600">{error}</p>
              </div>
            </div>
            <button
              type="submit"
              disabled={animation}
              className="block w-full disabled:bg-gray-600 disabled:animate-pulse p-3 text-center rounded-sm font-semibold text-gray-50 bg-[#F34D3A]"
            >
              {animation ? "Loading" : "Sign In"}
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            <p className="px-3 text-sm text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          </div>
          <div className="flex z-1 justify-center space-x-4">
            <button onClick={handleGoogleSignIN} className="p-3 rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 text-[#F34D3A] fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
          </div>
          <p className="text-xs text-center sm:px-6 text-gray-400">
            Don't have an account?
            <Link
              rel="noopener noreferrer"
              href="/auth/register"
              className="underline  text-blue-800"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
