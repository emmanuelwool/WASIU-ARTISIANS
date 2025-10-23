'use client';
import React from 'react';
import { columns, Service } from "./columns";
import { DataTable } from "./Data-table"
async function getData(): Promise<Service[]> {
  // Fetch data from your API here.
  return [
 {
      id: "srv-001-a",
      title: "Design de Logo Minimaliste et Moderne",
      category: "Design",
      price: 150.00,
      status: "available", // Disponible
      rating: 4.9,
      creationDate: "2024-05-10",
    },
    {
      id: "srv-002-e",
      title: "Création de Site Web Vitrine (3 pages)",
      category: "Développement",
      price: 850.00,
      status: "available", // Disponible
      rating: 4.5,
      creationDate: "2024-04-20",
    },
    {
      id: "srv-003-f",
      title: "Rédaction d'articles de blog SEO (500 mots)",
      category: "Rédaction",
      price: 50.00,
      status: "paused", 
      rating: 4.7,
      creationDate: "2024-06-01",
    },
    {
      id: "srv-004-g",
      title: "Campagne publicitaire Facebook/Instagram (1 semaine)",
      category: "Marketing",
      price: 220.00,
      status: "draft", 
      rating: 0.0, 
      creationDate: "2024-07-15",
    },
    {
      id: "srv-005-h",
      title: "Refonte de l'identité visuelle complète",
      category: "Design",
      price: 450.00,
      status: "available",
      rating: 4.6,
      creationDate: "2024-03-01",
    }
    // ...
  ]
}

export default async function ServicesTable() {
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
