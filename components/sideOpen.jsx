import React from "react";
import Image from "next/image";

const SideOpen = ({ handleIsNavOpen }) => {
  return (
    <div className="flex h-screen w-56 pb-10   flex-col justify-between   bg-white">
      <div className="px-2 md:px-6 lg:px-4 py-6">
        <div className="flex flex-row justify-between">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/iseea.png"
              alt="ISEEA Logo"
              width={100}
              height={24}
              priority
            />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleIsNavOpen();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 cursor-pointer"
              viewBox="0 0 384 512"
              //   style={{ pointerEvents: "auto" }}
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
        </div>

        <ul className="mt-6 space-y-1">
          <li>
            <a
              href="/pages/projects"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/pages/impact"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Impacts
            </a>
          </li>

          <li>
            <a
              href="/pages/intervention"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Interventions
            </a>
          </li>
          <li>
            <a
               href="/pages/team"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Team-Members
            </a>
          </li>
        </ul>
      </div>
           
      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
      <a className="block cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                logout 
            </a>
        <div
          className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
        >
          

          <div>
            <p className="text-xs text-black">
              <strong className="block font-medium">Eric Frusciante</strong>

              <span> eric@frusciante.com </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideOpen;
