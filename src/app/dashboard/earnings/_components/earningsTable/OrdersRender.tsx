import React from 'react';
import { columns, Payment } from "./columns";
import { DataTable } from "./Data-table"
async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
  {
    id: "728ed52f-a",
    firstName: "Liam",
    lastName: "Duval",
    amount: 100,
    status: "pending",
    email: "liam.duval@example.com",
    orderType: "Tapis",
    date: "2023-10-20",
    artisanId: "artisan-101", // Assigné à l'Artisan 1
  },
  {
    id: "728ed52f-e",
    firstName: "Gabriel",
    lastName: "Morel",
    amount: 220,
    status: "success",
    email: "gabriel.morel@example.com",
    orderType: "Statue en Bois",
    date: "2023-10-22",
    artisanId: "artisan-101", // Assigné à l'Artisan 1
  },
  // Commandes de l'Artisan 2 (ID: artisan-102)
  {
    id: "728ed52f-f",
    firstName: "Chloé",
    lastName: "Fournier",
    amount: 150,
    status: "processing",
    email: "chloe.fournier@example.com",
    orderType: "Bijou",
    date: "2023-10-22",
    artisanId: "artisan-102", // Assigné à l'Artisan 2
  },
  {
    id: "728ed52f-g",
    firstName: "Ethan",
    lastName: "Roux",
    amount: 100,
    status: "failed",
    email: "ethan.roux@example.com",
    orderType: "Céramique",
    date: "2023-10-23",
    artisanId: "artisan-102", // Assigné à l'Artisan 2
  },
  // Commandes Non Assignées (ou pour un autre artisan)
  {
    id: "728ed52f-h",
    firstName: "Sarah",
    lastName: "Zen",
    amount: 50,
    status: "pending",
    email: "sarah@example.com",
    orderType: "Peinture",
    date: "2023-10-23",
    artisanId: "artisan-999", // Assigné à un autre
  }
    // ...
  ]
}

export default async function OrderRender() {
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
