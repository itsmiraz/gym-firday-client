import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="text-center h-[700px] flex flex-col justify-center items-center">
      <h1 className="text-9xl font-bold text-center mt-10">404</h1>
      <h1 className="text-4xl font-semibold text-center ">
        Seems Like Your Lost
      </h1>
      <Link href={'/'}>
        <button className="my-4 px-4 py-2 border border-gray-900 text-center">
          Back To Home{" "}
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
