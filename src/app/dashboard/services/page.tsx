"use client";

import ServicesTable from "./_components/servicesCrud/Servictable";

export default function page() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Services</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Add New Service
        </button>

        
      </div>


      <div className="">
        <div className="">
            <ServicesTable />
        </div>
      </div>
    </>
  );
}
