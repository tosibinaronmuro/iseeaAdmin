import PageHeader from '@/components/page-header'
import React from 'react'
import TeamMember from '@/components/Team-card';

const page = async () => {
  const res = await fetch("https://iseea.onrender.com/api/v1/members", {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data, typeof data.blogs);
  // https://blogging-haven-api.onrender.com/api/v1/blogs

  const action = () => {
    console.log("modal here!!!");
  };
  return (
    <div>
      <PageHeader name={"Team Member"} />
      <div className=" pb-8 pt-14  pl-[10%] pr-[10%] ">
        <div className="flex flex-col space-y-8">
          <p className="font-garmond text-xl font-bold lg:text-3xl ">
          THE MANAGEMENT TEAM
          </p>
          <div className="  flex flex-wrap gap-3 justify-center  ">
            {data.members.map((member) => {
              if (member.department == "management") {
                return (
                  <TeamMember
                    name={member.name}
                    photo={`https://iseea.onrender.com/uploads/team-members/${member.memberImage}`}
                    bio={member.bio}
                    position={member.position}
                    key={member.id}
                  />
                );
              }
            })}
          </div>
        </div>
        <div className="flex flex-col space-y-8 mt-10">
          <p className="font-garmond  font-bold text-xl lg:text-3xl ">
          THE SOCIAL MEDIA TEAM
          </p>
          <div className=" flex flex-wrap gap-3 justify-center  ">
            {/* map function here */}
            {data.members.map((member) => {
              if (member.department == "socials") {
                return (
                  <TeamMember
                    name={member.name}
                    photo={`https://iseea.onrender.com/uploads/team-members/${member.memberImage}`}
                    bio={member.bio}
                    position={member.position}
                    key={member.id}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page