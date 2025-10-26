"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox" // Assure-toi que ce composant existe
import { Badge } from "@/components/ui/badge" // Tu pourrais avoir besoin de ce composant pour les couleurs

// 1. Mise à jour du type de données
export type Payment = {
id: string
  firstName: string
  lastName: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
  orderType: string
  date: string
  artisanId: string}

// Fonction utilitaire pour obtenir la couleur du statut
const getStatusColor = (status: Payment["status"]) => {
  switch (status) {
    case "success":
      return "bg-green-500 hover:bg-green-600" // Vert pour Succès
    case "processing":
      return "bg-blue-500 hover:bg-blue-600" // Bleu pour Traitement
    case "pending":
      return "bg-yellow-500 hover:bg-yellow-600" // Jaune pour En attente
    case "failed":
      return "bg-red-500 hover:bg-red-600" // Rouge pour Échec
    default:
      return "bg-gray-500 hover:bg-gray-600"
  }
}

// 2. Définition des colonnes
export const columns: ColumnDef<Payment>[] = [
  // 3. Case à cocher au début
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "orderType",
    header: " Commande Type", // Exemple de champ "Liste de demande/commande"
  },
  {
    accessorKey: "firstName",
    header: "Lastname",
  },

  {
    accessorKey: "lastName",
    header: "Firstname",
  },
   {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  // 4. Statut au milieu avec couleur
  {
    accessorKey: "status",
    header: "Statut",
    cell: ({ row }) => {
      const status = row.getValue("status") as Payment["status"]
      const colorClass = getStatusColor(status)

      return (
        <div className="flex items-center gap-2">
          {/* Puce colorée */}
          <span className={`h-2 w-2 rounded-full ${colorClass}`} />
          {/* Texte du statut */}
          <span className="capitalize">{status}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(amount)
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
 
]