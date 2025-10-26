"use client";

import AddServices from "./_components/crudComponents/AddServices";
import ServicesTable from "./_components/servicesCrud/Servictable";

export default function page() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Services</h1>
       <AddServices />

        
      </div>


      <div className="">
        <div className="">
            <ServicesTable />
        </div>
      </div>
    </>
  );
}
