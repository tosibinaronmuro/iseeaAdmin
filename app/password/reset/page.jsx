"use client";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import ErrorAlert from "@/components/alert/error";
import SuccessAlert from "@/components/alert/success";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const [showConfirmedPassword, setshowConfirmedPassword] = useState(false);
  const toggleConfirmedPasswordVisibility = () =>
    setshowConfirmedPassword(!showConfirmedPassword);
  const [isError, setisError] = useState(false);
  const [isSuccessful, setisSuccessful] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true); // refactor this to be under isError
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const passwordResetMutation = async ({ password  }) => {
    const url = `https://iseea.onrender.com/api/v1/auth/reset-password `;

    const response = await axios.post(
      url,
      { password },
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

  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const mutation = useMutation(passwordResetMutation, {
    onSuccess: (data) => {
      // create loading spinner
      //  store token in state management state and possibly frontend session storage?
      passwordRef.current.value = "";
      confirmPasswordRef.current.value = "";
      setisSuccessful(true);
      console.log(data);
      setMessage(data.msg);
    },
    onError: (error) => {
      if (error.response && error.response.data) {
        console.error("Error:", error.response.data);
        passwordRef.current.value = "";
        confirmPasswordRef.current.value = "";
        setError(error.response.data.msg);
        setisError(true);
      } else {
        console.error("Error:", error.message);
        setError(error.message);
        setisError(true);
      }
    },
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (passwordRef.current.value === confirmPasswordRef.current.value) {
  //     // Passwords match, you can proceed with your logic (e.g., submit form)
  //     setPasswordMatch(true);
  //     const password = passwordRef.current.value;
  //     mutation.mutate({   password });
  //   } else {
  //     // Passwords don't match, show an error message
  //     setPasswordMatch(false);
  //     passwordRef.current.value = "";
  //     confirmPasswordRef.current.value="";
  //   }
  // };
  const handleSubmit = async (e ) => {
    e.preventDefault();
    if (passwordRef.current.value === confirmPasswordRef.current.value) {
      setPasswordMatch(true);
      const password = passwordRef.current.value;
      await passwordResetMutation({ password  });
    } else {
      setPasswordMatch(false);
      passwordRef.current.value = "";
      confirmPasswordRef.current.value = "";
    }
  };

  useEffect(() => {
    let timeout;
    if (error || !passwordMatch) {
      timeout = setTimeout(() => {
        setError(false);
        setPasswordMatch(true);
      }, 5000);
    }
    if (isSuccessful) {
      timeout = setTimeout(() => {
        router.push("/signin");
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [error, passwordMatch]);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col m-auto bg-white w-full mx-3  lg:w-1/3 rounded-2xl justify-center items-center p-4 ">
        <div className="mx-auto px-4 sm:container">
          <div className="border-stroke items-center justify-between border-b border-black md:flex">
            <div className=" mb-4 w-full">
              <h2 className="mb-2 font-garmond text-2xl font-semibold text-black">
                Reset your password
              </h2>
              <p>What would you like your new password to be?</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-10 relative ">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              "
              required
              ref={passwordRef}
            />
            <div className="absolute inset-y-0 right-0 pr-3 pt-4 flex items-center justify-center text-sm leading-5">
              {showPassword ? (
                <svg
                  onClick={togglePasswordVisibility}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 flex justify-center items-center"
                  viewBox="0 0 576 512"
                >
                  {" "}
                  <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                </svg>
              ) : (
                <svg
                  onClick={togglePasswordVisibility}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 flex justify-center items-center"
                  viewBox="0 0 576 512"
                >
                  {" "}
                  <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" />
                </svg>
              )}
            </div>
          </div>

          <div className=" col-span-10 relative  ">
            <label
              htmlFor="PasswordConfirmation"
              className="block text-sm font-medium text-gray-700"
            >
              New Password Confirmation
            </label>

            <input
              type={showConfirmedPassword ? "text" : "password"}
              id="PasswordConfirmation"
              name="passwordconfirmation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              "
              required
              ref={confirmPasswordRef}
            />
            <div className="absolute inset-y-0 right-0 pr-3 pt-4 flex items-center justify-center text-sm leading-5">
              {showConfirmedPassword ? (
                <svg
                  onClick={toggleConfirmedPasswordVisibility}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 flex justify-center items-center"
                  viewBox="0 0 576 512"
                >
                  {" "}
                  <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                </svg>
              ) : (
                <svg
                  onClick={toggleConfirmedPasswordVisibility}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 flex justify-center items-center"
                  viewBox="0 0 576 512"
                >
                  {" "}
                  <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" />
                </svg>
              )}
            </div>
          </div>

          <div className="col-span-10  flex justify-center items-center sm:gap-4">
            <button
              onClick={() => router.push("/signin")}
              className="inline-block shrink-0 mx-2 rounded-md border border-blue-600 bg-white px-8 lg:px-12 py-3 text-sm font-medium text-black transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-block shrink-0 mx-2 rounded-md border border-blue-600 bg-blue-600 px-4 lg:px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
            >
              Reset Password
            </button>
          </div>
          {isError && <ErrorAlert error={error} message={" , Try again"} />}
          {!passwordMatch && (
            <ErrorAlert message={"Passwords do not match, Try again"} />
          )}
          {isSuccessful && <SuccessAlert message={message} />}
        </form>
      </div>
    </div>
  );
};

export default page;
