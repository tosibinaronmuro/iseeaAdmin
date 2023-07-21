import React from 'react'
import Sidebar from "@/components/sidenav";

const layout = ({ children }) => {
  return (
    <div className="">
        <div className="flex">
          <Sidebar />
          <main className="flex-grow">{children}</main>
        </div>
      </div>
  )
}

export default layout