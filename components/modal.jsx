"use client"
import React, { useEffect, useRef, useState } from "react";

const Modal = ({setModalOpen,trigger,modal, modalOpen, name }) => {
//   const [modalOpen, setModalOpen] = useState(false);

//   const trigger = useRef(null);
//   const modal = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <div className="container mx-auto  ">
        
        <div
          className={`fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5 ${
            modalOpen ? "block" : "hidden"
          }`}
        >
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]"
          >
              <form action="#" className="my-8 grid grid-cols-6 gap-6">
        
          
        <div className="col-span-10">
          <label htmlFor="number" className="block text-sm font-medium text-gray-700">
            Number
          </label>
          {/* should be decided in the backend?? */}
        
          <input
            type="text"
            id="number"
            name="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
            "   required
          />
        </div>
        
        <div className="col-span-10  ">
          <label
            htmlFor="story"
            className="block text-sm font-medium text-gray-700"
          >
            story
          </label>
        
          <textarea 
            type="story"
            id="story"
            name="story"
            rows="5"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
            " required
            
          />
        </div>
        
        </form>
            <div className="flex flex-wrap -mx-3">
              <div className="w-1/2 px-3">
                <button
                  onClick={() => setModalOpen(false)}
                  className="block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                >
                  Cancel
                </button>
              </div>
              <div className="w-1/2 px-3">
                <button
                  className={`block w-full p-3 text-base font-medium text-center text-white transition border rounded-lg border-primary bg-primary hover:bg-opacity-90`}
                >
                  <a href={`/#`}> Add {name}</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
