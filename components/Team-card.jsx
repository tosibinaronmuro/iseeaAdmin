import React from 'react'
import Edit from "./icons/edit";
import Delete from "./icons/delete";

const TeamMember = ({photo,name,position,bio}) => {
  return (
    <div   className="group relative block bg-tertiary min-w-[70%] max-w-[71%] min-h-[45vh] lg:min-h-auto  md:min-w-[40%]  h-auto   md:max-w-[45% ] md:max-w-[45%] lg:w-[30%]">
  <img
    alt="Developer"
    src={`https://iseea.onrender.com/uploads/team-members/${photo}`}
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
   
    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className=" transform  transition-all translate-y-0  opacity-100"
      >
         <p className="text-sm font-medium font-garmond uppercase tracking-widest text-primary">
      {position}
    </p>

    <div className="flex justify-between"><p className="text-base font-bold text-white font-Poiret lg:text-2xl">{name}</p>
    <div className="flex items-center mx-2 justify-end space-x-3">
        <Edit  />
        <Delete/>
      </div> </div>
        {/* <p className="text-md lg:font-semibold  text-secondary font-Poiret">
          {bio}
        </p> */}
      </div>
    </div>
  </div>
</div>
  )
}

export default TeamMember