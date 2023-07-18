import PageHeader from '@/components/page-header'
import React from 'react'

const page = () => {
    const action=()=>{
        console.log("modal here!!!")
    }
  return (
    <div>
        <PageHeader  name={"Project"}  />
    </div>
  )
}

export default page