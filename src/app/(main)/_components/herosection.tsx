import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const Herosection = () => {
  return (
    <section className="mt-10 px-4 sm:px-8">
      <div className="bg-[#F9F7F3]  flex flex-col justify-center items-center text-center min-h-[30rem] sm:min-h-[35rem] rounded-2xl space-y-8 p-6">
        
        {/* Texte principal */}
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-2xl text-[#212121] sm:text-3xl md:text-5xl italic font-bold leading-tight">
            Connect with Trusted <br className="hidden sm:block" /> 
            Artisans, Anytime, Anywhere
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#757575]">
            Whether you're a homeowner or a business, find trusted professionals
            for repairs, construction, and custom projects — anytime, anywhere.
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="w-full max-w-2xl">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              placeholder="Search for services (plumber, electrician, carpenter...)"
              className="flex-1 bg-white text-gray-900 border-0 h-12 placeholder:text-gray-500 focus:ring-2 focus:ring-yellow-400"
            />
            <Button className="text-white font-semibold px-8 h-12 bg-[#7B1FA2] hover:bg-[#B388FF] hover:text-[#212121] transition-all duration-300 flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Search
            </Button>
          </div>
        </div>

        {/* Infos complémentaires */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base">
          <p className="italic font-medium">200,000+ members</p>
          <span className="hidden sm:inline">|</span>
          <p className="italic font-medium">Support 24h/24 et 7j/7</p>
          <span className="hidden sm:inline">|</span>
          <p className="italic font-medium">Safe and transparent payments</p>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
