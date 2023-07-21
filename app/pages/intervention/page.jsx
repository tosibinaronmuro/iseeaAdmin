 
import PageHeader from '@/components/page-header'
import React from 'react'

const page = async () => {
  
   const res = await fetch('https://localhost:5000/api/v1/interventions',{cache:'no-store'});
  const data = await res.json()
    console.log(data,typeof(data.blogs))
  // https://blogging-haven-api.onrender.com/api/v1/blogs
  
    const action=()=>{
        console.log("modal here!!!")
    }
  return (
    <div>
        <PageHeader  name={"Intervention"}  />
        <div>
          {data.interventions.map((inte,index)=>{
            return(
              <p key={index}>{inte.title}</p>
            )
          })}
          <p>{data.totalInterventions}</p>
        </div>
    </div>
  )
}

export default page