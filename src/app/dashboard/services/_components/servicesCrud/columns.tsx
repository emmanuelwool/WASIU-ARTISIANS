

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

// IMPORTS NÉCESSAIRES POUR LES ACTIONS
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Eye, Pencil, Trash2 } from "lucide-react" // Icônes d'action


// 1. Mise à jour du type de données pour lister les Services
export type Service = {
  id: string; // Identifiant unique du service
  title: string; // Titre du service (ex: "Création de site web vitrine")
  category: "Design" | "Développement" | "Rédaction" | "Marketing"; // Catégorie du service
  price: number; // Prix de départ du service
  status: "available" | "paused" | "draft"; // Statut du service (Disponible, En Pause, Brouillon)
  rating: number; 
  creationDate: string; 
}

// Fonction utilitaire pour obtenir la couleur du statut du service
const getStatusColor = (status: Service["status"]) => {
  switch (status) {
    case "available":
      return "bg-green-500 hover:bg-green-600"; // Vert pour Disponible
    case "paused":
      return "bg-yellow-500 hover:bg-yellow-600"; // Jaune pour En Pause
    case "draft":
      return "bg-gray-500 hover:bg-gray-600"; // Gris pour Brouillon
    default:
      return "bg-gray-500 hover:bg-gray-600";
  }
}

// 2. Définition des colonnes pour le type Service
export const columns: ColumnDef<Service>[] = [
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
  // Colonne : Titre du service
  {
    accessorKey: "title",
    header: "Titre du Service",
  },
  // Colonne : Nom de l'artisan
 
  // Colonne : Catégorie
  {
    accessorKey: "category",
    header: "Catégorie",
  },
  // Colonne : Note
  {
    accessorKey: "rating",
    header: "Note",
    cell: ({ row }) => {
      const rating = row.getValue("rating") as number;
      // Affichage de la note avec 1 décimale
      return <div className="font-medium">{rating.toFixed(1)} / 5</div>;
    },
  },
  // Colonne : Date de création/modification
  {
    accessorKey: "creationDate",
    header: "Date",
  },
  // 4. Statut au milieu avec couleur
  {
    accessorKey: "status",
    header: "Statut",
    cell: ({ row }) => {
      const status = row.getValue("status") as Service["status"]
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
  // Colonne : Prix
  {
    accessorKey: "price",
    header: () => <div className="text-right">Prix de départ</div>,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"))
      const formatted = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(price)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  
  // 5. Colonne : Actions (CRUD)
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    cell: ({ row }) => {
      const service = row.original // Accès à toutes les données du service

      return (
        <div className="flex justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Ouvrir le menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
            
              
              {/* Voir les détails (Read) */}
              <DropdownMenuItem
                onClick={() => {
                   // Logique pour afficher les détails du service, par exemple via un modal
                  console.log(`Afficher les détails de ${service.id}`)
                }}
                className="cursor-pointer"
              >
                <Eye className="mr-2 h-4 w-4" />
                Voir les détails
              </DropdownMenuItem>
              
              {/* Modifier (Update) */}
              <DropdownMenuItem
                onClick={() => {
                  // Logique pour naviguer vers la page d'édition ou ouvrir le formulaire
                  console.log(`Modifier le service ${service.id}`)
                }}
                className="cursor-pointer"
              >
                <Pencil className="mr-2 h-4 w-4" />
                Modifier
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              {/* Supprimer (Delete) */}
              <DropdownMenuItem
                onClick={() => {
                  // Logique pour supprimer le service (ATTENTION: demander une confirmation !)
                  console.log(`Supprimer le service ${service.id}`)
                }}
                className="cursor-pointer text-red-600 focus:text-red-600"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Supprimer
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
  },
]