"use client"
import PageHeader from "@/components/page-header";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
    const router=useRouter()
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col m-auto bg-white w-1/3 rounded-2xl justify-center items-center p-4 ">
        <div className="mx-auto px-4 sm:container">
          <div className="border-stroke items-center justify-between border-b border-black md:flex">
            <div className=" mb-4 w-full">
              <h2 className="mb-2 font-garmond text-2xl font-semibold text-black">
              Forgot your password?
              </h2>
              <p>
                Enter your email address below and we will send you a password reset
                link
              </p>
            </div>
          </div>
        </div>
        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-10">
            <label
              htmlFor="email"
              className="block text-sm py-2 font-medium text-gray-700"
            >
              Email
            </label>

            <input
              type="text"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              "
              placeholder="e.g. johndoe@gmail.com"
              required
            />
          </div>

          <div className="col-span-10  flex justify-center items-center sm:gap-4">
            <button onClick={()=> router.push('/signin')} className="inline-block shrink-0 rounded-md border border-blue-600 bg-white px-12 py-3 text-sm font-medium text-black transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
              Cancel
            </button>
            <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
              Forgot Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;