import React from "react";
import Edit from "../../../components/icons/edit";
import Delete from "../../../components/icons/delete";
import AnnualReport from "@/components/annual-report";
import PageHeader from "@/components/page-header";

const page = async () => {
  const res = await fetch("https://iseea.onrender.com/api/v1/numbers", {
    cache: "no-store",
  });
  const data = await res.json();
  const annualres = await fetch("https://iseea.onrender.com/api/v1/reports", {
    cache: "no-store",
  });
  const annualdata = await annualres.json();
 
  const action = () => {
    console.log("modal here!!!");
  };
  return (
    <div>
      <section className=" pt-5 lg:pt-[30px]">
        <div className="mx-auto px-4 sm:container">
          <div className="border-stroke items-center justify-between border-b border-black md:flex">
            <div className="mb-6 w-full">
              <h2 className="mb-2 font-garmond text-2xl font-semibold text-black">
                Numbers
              </h2>
              <p className="text-body-color font-Poiret text-sm font-medium">
                Admins can only Update data here
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-black rounded-xl mx-14 p-4 flex flex-col my-3">
        <div className="flex justify-end space-x-3">
          <Edit />
          {/* <Delete /> */}
        </div>
        <div className="container my-9 mx-auto md:px-6">
          <section className="mb-6 text-center">
            <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
              <div className="mb-6 md:mb-0">
                <h2 className="display-5 mb-4 text-4xl font-bold text-primary dark:text-primary-400">
                  {data.impactNumbers[0].money}+
                </h2>
                <h5 className="mb-4 text-lg text-white font-medium">Naira</h5>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Has been raised so far
                </p>
              </div>

              <div className="mb-6 md:mb-0">
                <h2 className="display-5 mb-4 text-4xl font-bold text-primary dark:text-primary-400">
                {data.impactNumbers[0].children}+
                </h2>
                <h5 className="mb-4 text-lg text-white font-medium">Children</h5>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Have been impacted so far through projects and donations
                </p>
              </div>

              <div className="mb-6 md:mb-0">
                <h2 className="display-5 mb-4 text-4xl font-bold text-primary dark:text-primary-400">
                {data.impactNumbers[0].projects}+
                </h2>
                <h5 className="mb-4 text-lg text-white font-medium">Projects</h5>
                <p className="text-neutral-500 dark:text-neutral-300">
                  Have been initiated and we will continue to expand our reach
                  as the need arises
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div>
        <PageHeader name={"Report"}/>
      <div className="flex flex-wrap justify-center">
        {annualdata.reports.map(( report,index)=>{
          return <AnnualReport name={report.name} report={report.reportFile} key={index}  />
        })}
      
      </div>
      </div>
    </div>
  );
};

export default page;
