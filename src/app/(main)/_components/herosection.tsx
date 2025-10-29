import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const Herosection = () => {
  return (
    <div className="mt-10">
      <div className="bg-blue-500 text-white flex flex-col justify-center items-center text-center h-[35rem] rounded-2xl space-y-8">
        <div className=" space-y-4">
          <h1 className="text-3xl italic font-bold">
            Connect with Trusted <br /> Artisans,Anytime, Anywhere
          </h1>
          <p>
            Whether you're a homeowner or a business, find trusted professionals
            for <br /> repairs, construction, and custom projects — anytime,
            anywhere.
          </p>
        </div>

     <div className="w-full max-w-2xl">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                placeholder="Search for services (plumber, electrician, carpenter...)" 
                className="flex-1 bg-white text-gray-900 border-0 h-12  placeholder:text-gray-500 focus:ring-2 focus:ring-yellow-400"
              />
              <Button 
                className="text-white font-semibold px-8 h-12  shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Search className="w-5 h-5" />
                Search
              </Button>
            </div>
          </div>
        <div className="">
            <div className="flex items-center  gap-4">
                <div className="">
                    <p className="italic font-medium">200,000+ members</p>
                </div>
                <div className="">
                    <p className="italic font-medium">Support 24h/24 et 7d/7</p>
                </div>
                <div className="">
                    <p className="italic font-medium">Safe and transparent payments</p>
                </div>

               
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
