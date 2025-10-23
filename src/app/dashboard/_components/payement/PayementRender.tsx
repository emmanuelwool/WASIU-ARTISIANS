import React from 'react';
import { columns, Payment } from "./columns";
import { DataTable } from "./Data-table"
async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
   {
      id: "728ed52f",
      amount: 450.75,
      status: "pending",
      email: "alice.dupont@mail.com",
      name: "Alice",
      lastName: "Dupont",
    },
    {
      id: "6a9f0c1b",
      amount: 120.00,
      status: "pending",
      email: "bob.martin@mail.com",
      name: "Bob",
      lastName: "Martin",
    },
    {
      id: "3d2e1a4c",
      amount: 88.50,
      status: "pending",
      email: "charlie.legrand@mail.com",
      name: "Charlie",
      lastName: "Legrand",
    },
    {
      id: "b4c5d6e7",
      amount: 15.99,
      status: "failed",
      email: "diana.rousseau@mail.com",
      name: "Diana",
      lastName: "Rousseau",
    },
    {
      id: "a1b2c3d4",
      amount: 750.00,
      status: "success",
      email: "emile.petit@mail.com",
      name: "Émile",
      lastName: "Petit",
    },
    {
      id: "e5f6g7h8",
      amount: 320.40,
      status: "processing",
      email: "fanny.moreau@mail.com",
      name: "Fanny",
      lastName: "Moreau",
    },
    {
      id: "f9g0h1i2",
      amount: 55.60,
      status: "failed",
      email: "gilles.lambert@mail.com",
      name: "Gilles",
      lastName: "Lambert",
    },
    {
      id: "1i2j3k4l",
      amount: 999.99,
      status: "success",
      email: "helene.durand@mail.com",
      name: "Hélène",
      lastName: "Durand",
    },
    // ...
  ]
}

export default async function PayementRender() {
  const data = await getData();
    console.log(data);
  
 return (
    <>
    
     <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
    </>
 )
}
