"use client";
import React, { useState } from "react";
import Edit from "./icons/edit";
import Delete from "./icons/delete";

const AnnualReport = ({ name, report }) => {
  const [fileUrl, setFileUrl] = useState("");

  const handleClick = () => {
    // Set the file URL to the path of the PDF file
    setFileUrl(`https://iseea.onrender.com/uploads/reports/${report}`);
  };
  return (
    <div className="block rounded-lg max-w-lg m-2 bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="flex justify-between">
        <h5 className="mb-2 text-xl font-medium leading-tight  text-neutral-50">
          {name}
        </h5>
        <div className="flex justify-end space-x-3">
          <Edit />
          <Delete />
        </div>
      </div>

      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        click the button below to download the reportin pdf format
      </p>
      <a href={fileUrl} download>
        <button
          type="button"
          onClick={handleClick}
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Download
        </button>
      </a>
    </div>
  );
};

export default AnnualReport;
