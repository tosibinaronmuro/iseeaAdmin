"use client";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import ErrorAlert from "@/components/alert/error";
import SuccessAlert from "@/components/alert/success";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [isError, setisError] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccessful, setisSuccessful] = useState(false);
  const forgorPasswordMutation = async ({ email }) => {
    const response = await axios.post(
      "https://iseea.onrender.com/api/v1/auth/forgot-password",
      { email },
      {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  };

  const emailRef = useRef();
  const mutation = useMutation(forgorPasswordMutation, {
    onSuccess: (data) => {
      // create loading spinner
      emailRef.current.value = "";
      setisSuccessful(true);
      console.log(data);
      setMessage(data.msg);
      // redirect to /signin ?
    },
    onError: (error) => {
      if (error.response && error.response.data) {
        console.error("Error:", error.response.data);
        emailRef.current.value = "";
        setError(error.response.data.msg);
        setisError(true);
      } else {
        console.error("Error:", error.message);
        setError(error.message);
        setisError(true);
      }
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    mutation.mutate({ email });
  };

  useEffect(() => {
    let timeout;
    if (error) {
      timeout = setTimeout(() => {
        setisError(false);
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [error]);
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col m-auto bg-white w-full mx-3  lg:w-1/3 rounded-2xl justify-center items-center p-4 ">
        <div className="mx-auto px-4 sm:container">
          <div className="border-stroke items-center justify-between border-b border-black md:flex">
            <div className=" mb-4 w-full">
              <h2 className="mb-2 font-garmond text-2xl font-semibold text-black">
                Forgot your password?
              </h2>
              <p>
                Enter your email address below and we will send you a password
                reset link
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
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
              ref={emailRef}
            />
          </div>

          <div className="col-span-10  flex justify-center items-center  gap-4">
            <button
              onClick={() => router.push("/signin")}
              className="inline-block mx-2 shrink-0 rounded-md border border-blue-600 bg-white  px-8 lg:px-12 py-3 text-sm font-medium text-black transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-block shrink-0 rounded-md border mx-2 border-blue-600 bg-blue-600 px-4 lg:px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Forgot Password
            </button>
          </div>
          {isError && <ErrorAlert error={error} message={" , Try again"} />}
          {isSuccessful && <SuccessAlert message={message} />}
        </form>
      </div>
    </div>
  );
};

export default page;
