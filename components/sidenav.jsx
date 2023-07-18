"use client";
import React, { useState } from "react";
import Image from "next/image";
import SideOpen from "./sideOpen";
import SideClosed from "./sideClosed";

const Sidebar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  

  const handleIsNavOpen = () => {
    setIsNavOpen(prevState => !prevState);
  };
  
  return (
    <div className=" ">
      {isNavOpen ? (
        <SideOpen handleIsNavOpen={handleIsNavOpen} />
      ):(
        <SideClosed handleIsNavOpen={handleIsNavOpen} />
      )  }
      {/* <SideOpen/> */}
    </div>
  );
};

export default Sidebar;
