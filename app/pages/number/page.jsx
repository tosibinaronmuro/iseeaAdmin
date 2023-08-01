import React from "react";
import Edit from "../../../components/icons/edit";
import Delete from "../../../components/icons/delete";

const page = async () => {
  const res = await fetch("https://iseea.onrender.com/api/v1/numbers", {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data.impactNumbers[0])
  const action = () => {
    console.log("modal here!!!");
  };
  return (
    <div>
      <section className=" pt-5 lg:pt-[40px]">
        <div className="mx-auto px-4 sm:container">
          <div className="border-stroke items-center justify-between border-b border-black md:flex">
            <div className="mb-6 w-full">
              <h2 className="mb-2 font-garmond text-2xl font-semibold text-black">
                Numbers
              </h2>
              <p className="text-body-color font-Poiret text-sm font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                ultrices lectus sem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-black rounded-xl mx-14 p-4 flex flex-col my-3">
        <div className="flex justify-end space-x-3">
          <Edit />
          <Delete />
        </div>
        <div class="container my-9 mx-auto md:px-6">
          <section class="mb-14 text-center">
            <div class="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
              <div class="mb-12 md:mb-0">
                <h2 class="display-5 mb-4 text-4xl font-bold text-primary dark:text-primary-400">
                  {data.impactNumbers[0].money}+
                </h2>
                <h5 class="mb-4 text-lg text-white font-medium">Naira</h5>
                <p class="text-neutral-500 dark:text-neutral-300">
                  Has been raised so far
                </p>
              </div>

              <div class="mb-12 md:mb-0">
                <h2 class="display-5 mb-4 text-4xl font-bold text-primary dark:text-primary-400">
                {data.impactNumbers[0].children}+
                </h2>
                <h5 class="mb-4 text-lg text-white font-medium">Children</h5>
                <p class="text-neutral-500 dark:text-neutral-300">
                  Have been impacted so far through projects and donations
                </p>
              </div>

              <div class="mb-12 md:mb-0">
                <h2 class="display-5 mb-4 text-4xl font-bold text-primary dark:text-primary-400">
                {data.impactNumbers[0].projects}+
                </h2>
                <h5 class="mb-4 text-lg text-white font-medium">Projects</h5>
                <p class="text-neutral-500 dark:text-neutral-300">
                  Have been initiated and we will continue to expand our reach
                  as the need arises
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
