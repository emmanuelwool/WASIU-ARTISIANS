"use client"
import { ColumnDef } from "@tanstack/react-table"

// 1. Mise à jour du type Payment
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
  name: string
  lastName: string
}

const getStatusColor = (status: Payment["status"]): string => {
  switch (status) {
    case "success":
      return "text-green-600 bg-green-100"
    case "processing":
      return "text-blue-600 bg-blue-100"  
    case "failed":
      return "text-red-600 bg-red-100"    
    case "pending":
      return "text-yellow-600 bg-yellow-100"
    default:
      return "text-gray-600 bg-gray-100"
  }
}

// 2. Mise à jour du tableau des colonnes
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  // La colonne 'status' est maintenant au milieu
  {
    accessorKey: "status",
    header: "Statut",
    // Ajout d'une fonction de rendu de cellule personnalisée pour la couleur
    cell: ({ row }) => {
      const status = row.getValue("status") as Payment["status"]
      const colorClasses = getStatusColor(status)

      // Affichage du statut dans un petit badge coloré
      return (
        <span 
          className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${colorClasses}`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      )
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    // Rendu pour afficher le montant au format monétaire (optionnel, mais propre)
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR", // Changez 'EUR' si vous utilisez une autre devise
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
]