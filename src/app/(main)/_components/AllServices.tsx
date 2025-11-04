import { ServicesMock } from "@/mocks/AllMock";
import React from "react";

const AllServices = () => {
  return (
    <div className="mt-16 space-y-4">
      <h1 className="text-base italic md:text-xl lg:text-3xl font-bold ">
        All Services available
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {ServicesMock.map((popularService, index) => {
          return (
            <>
              <div className="rounded-xl shadow p-4" key={index}>
                <div className="space-y-4">
                  <p className="font-medium">{popularService.title}</p>
                  <div className="space-y-1.5">
                    <p>{popularService.desc}</p>
                    <div className="flex items-center justify-between">
                      <p>{popularService.price}</p>
                      <p>{popularService.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AllServices;
