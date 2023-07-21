"use client";
import React, { useRef } from "react";
import Image from "next/image";
// import axios from "axios";

const page = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  // const login = async (email, password) => {
  //   try {
  //     const response = await axios.post("http://localhost:5000/api/v1/login", {
  //       email,
  //       password,
  //     });
  //     console.log("Login successful:", response.data);
  //   } catch (error) {
  //     console.error("Login failed:", error);
  //   }
  // };

  const handleSubmit =  (e) => {
    e.preventDefault();
    console.log('hello')
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
      fetch('localhost:5000/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data here (e.g., redirect, show messages, etc.)
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error('Error:', error);
      });
    // login(email, password);
  
  };
  return (
    <section className="bg-white min-h-screen">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/images/iseea.png"
                alt="ISEEA Logo"
                width={100}
                height={24}
                priority
              />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to I.S.E.E.A Admin site
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              You can manage and control various aspects of the main website.
              Explore our intuitive dashboard to handle projects, impacts, and
              team members efficiently.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-6 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-2xl lg:max-w-4xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                href="/"
              >
                <div className="flex justify-center lg:justify-start">
                  <Image
                    src="/images/iseea.png"
                    alt="ISEEA Logo"
                    width={100}
                    height={24}
                    priority
                  />
                </div>
              </a>
            </div>

            <form
              onClick={() =>{ handleSubmit }}
             method="POST"
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-10">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              "
                  placeholder="e.g. johndoe@gmail.com"
                  required
                  ref={emailRef}
                />
              </div>

              <div className="col-span-10  ">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="password"
                  name="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              "
                  required
                  ref={passwordRef}
                />
              </div>

              <div className="flex flex-col space-y-4 col-span-10  ">
                <p className="mt-4 flex justify-center text-sm text-gray-500 sm:mt-0">
                  <a href="/signup" className="text-blue-700 mx-2 underline">
                    Forgot password?
                  </a>
                  .
                </p>

                <div className=" sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Login
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Don't have an account?
                    <a href="/" className="text-blue-700 mx-2 underline">
                      Register
                    </a>
                    .
                  </p>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default page;
