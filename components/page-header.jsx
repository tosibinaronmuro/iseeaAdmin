"use client";
import React, { useEffect, useRef, useState } from "react";
import Modal from "@/components/modal";
const PageHeader = ({ name}) => {
   const [modalOpen, setModalOpen] = useState(false);

   const trigger = useRef(null);
   const modal = useRef(null);
  return (
    
<section className=" pt-5 lg:pt-[40px]">
   <div className="mx-auto px-4 sm:container">
      <div
         className="border-stroke items-center justify-between border-b border-black md:flex"
         >
         <div className="mb-6 w-full">
            <h2 className="mb-2 font-garmond text-2xl font-semibold text-black">
               {name}s
            </h2>
            <p className="text-body-color font-Poiret text-sm font-medium">
               Admins can Add New {name}s, Update/Edit {name}s and Delete {name} in this section
            </p>
         </div>
         <div className="mb-6">
            <button  ref={trigger}
          onClick={() => setModalOpen(true)}
               className="bg-primary font-Poiret inline-flex items-center justify-center whitespace-nowrap rounded py-[10px] px-5 text-sm font-medium text-white hover:bg-opacity-90"
               >
               Add New {name}
               <span className="pl-2">
                  <svg
                     width="18"
                     height="18"
                     viewBox="0 0 18 18"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     >
                     <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.99961 2.39961C5.35453 2.39961 2.39961 5.35453 2.39961 8.99961C2.39961 12.6447 5.35453 15.5996 8.99961 15.5996C12.6447 15.5996 15.5996 12.6447 15.5996 8.99961C15.5996 5.35453 12.6447 2.39961 8.99961 2.39961ZM0.599609 8.99961C0.599609 4.36042 4.36042 0.599609 8.99961 0.599609C13.6388 0.599609 17.3996 4.36042 17.3996 8.99961C17.3996 13.6388 13.6388 17.3996 8.99961 17.3996C4.36042 17.3996 0.599609 13.6388 0.599609 8.99961Z"
                        fill="white"
                        />
                     <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.99961 5.09961C9.49667 5.09961 9.89961 5.50255 9.89961 5.99961V11.9996C9.89961 12.4967 9.49667 12.8996 8.99961 12.8996C8.50255 12.8996 8.09961 12.4967 8.09961 11.9996V5.99961C8.09961 5.50255 8.50255 5.09961 8.99961 5.09961Z"
                        fill="white"
                        />
                     <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.09961 8.99961C5.09961 8.50255 5.50255 8.09961 5.99961 8.09961H11.9996C12.4967 8.09961 12.8996 8.50255 12.8996 8.99961C12.8996 9.49667 12.4967 9.89961 11.9996 9.89961H5.99961C5.50255 9.89961 5.09961 9.49667 5.09961 8.99961Z"
                        fill="white"
                        />
                  </svg>
               </span>
            </button>
         </div>
      </div>
   </div>
   <Modal
          setModalOpen={setModalOpen}
          trigger={trigger}
          modal={modal}
          modalOpen={modalOpen}
          name={name}
        />
</section>
 
  )
}

export default PageHeader