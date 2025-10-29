import { FeaturiMock } from "@/mocks/AllMock";
import { CircleCheck } from "lucide-react";
import React from "react";

const AboutSetion = () => {
  return (
    <div className="mt-16 bg-blue-500 rounded-2xl p-8 px-16">
      <div className="grid grid-cols-2  gap-8">
        <div className="w-full">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold  text-white">Wassiu</h1>
            <p className="text-4xl font-medium  leading-[1.5]">
              The premium platform empowering <span className="bg-white p-1 px-4 rounded-lg rotate-96">artisans</span> and freelancers
            </p>
          </div>

          <div className="mt-8 text-white ">
            <div className=" grid grid-cols-2 gap-6">
              {FeaturiMock.map((feact) => {
                return (
                  <>
                    <div key={feact.id} className="space-y-4">
                      <CircleCheck />
                      <div className="space-y-1">
                        <h1 className="text-xl font-bold"> {feact.title}</h1>
                        <p>{feact.desc}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <img src="/wasiu.webp" alt="" />
      </div>
    </div>
  );
};

export default AboutSetion;
