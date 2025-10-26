import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Eye, Pencil, Trash2, Plus } from "lucide-react"
import { ViewServiceDialog } from "../crudComponents/ViewServiceDialog"
import { EditServiceDialog } from "../crudComponents/EditServiceDialog"
import { DeleteServiceDialog } from "../crudComponents/DeleteServiceDialog"

// Import des composants séparés
export type Service = {
  id: string
  title: string
  category: string
  price: number
  status: "available" | "paused" | "draft"
  rating: number
  creationDate: string
  description?: string
  duration?: string
  location?: string
  phone?: string
}

const getStatusColor = (status: Service["status"]) => {
  switch (status) {
    case "available":
      return "bg-green-500"
    case "paused":
      return "bg-yellow-500"
    case "draft":
      return "bg-gray-500"
    default:
      return "bg-gray-500"
  }
}

interface ServiceManagementProps {
  data?: Service[]
}

export default function ServiceManagement({ data: initialData }: ServiceManagementProps) {
  // Données par défaut si aucune donnée n'est fournie
  const defaultData: Service[] = [
    {
      id: "1",
      title: "Custom Furniture Design",
      category: "Carpentry",
      price: 500,
      status: "available",
      rating: 4.8,
      creationDate: "2024-10-15",
      description: "Professional custom furniture design and installation",
      duration: "3-5 days",
      location: "New York, NY",
      phone: "+1 555-0101"
    },
    {
      id: "2",
      title: "Home Plumbing Repair",
      category: "Plumbing",
      price: 150,
      status: "available",
      rating: 4.5,
      creationDate: "2024-10-20",
      description: "Expert plumbing repair services",
      duration: "1-2 days",
      location: "Brooklyn, NY",
      phone: "+1 555-0102"
    },
    {
      id: "3",
      title: "Electrical Installation",
      category: "Electrical",
      price: 300,
      status: "paused",
      rating: 4.9,
      creationDate: "2024-10-18",
      description: "Professional electrical installation",
      duration: "2-3 days",
      location: "Manhattan, NY",
      phone: "+1 555-0103"
    },
  ]

  const [services, setServices] = useState<Service[]>(initialData || defaultData)
  const [viewDialogOpen, setViewDialogOpen] = useState(false)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set())

  const handleView = (service: Service) => {
    setSelectedService(service)
    setViewDialogOpen(true)
  }

  const handleEdit = (service: Service) => {
    setSelectedService(service)
    setEditDialogOpen(true)
  }

  const handleDeleteConfirm = (service: Service) => {
    setSelectedService(service)
    setDeleteDialogOpen(true)
  }

  const handleDelete = () => {
    if (selectedService) {
      setServices(services.filter(s => s.id !== selectedService.id))
      setDeleteDialogOpen(false)
      setSelectedService(null)
    }
  }

  const handleSaveEdit = (updatedService: Service) => {
    setServices(services.map(s => 
      s.id === updatedService.id ? updatedService : s
    ))
  }

  const toggleRowSelection = (id: string) => {
    const newSelection = new Set(selectedRows)
    if (newSelection.has(id)) {
      newSelection.delete(id)
    } else {
      newSelection.add(id)
    }
    setSelectedRows(newSelection)
  }

  const toggleAllRows = () => {
    if (selectedRows.size === services.length) {
      setSelectedRows(new Set())
    } else {
      setSelectedRows(new Set(services.map(s => s.id)))
    }
  }

  return (
    <div className="w-full p-6 space-y-4">
    

      <div className="overflow-hidden rounded-md border">
        <table className="w-full">
          <thead className="bg-gray-800">
            <tr>
              <th className="py-4 px-4 text-left text-white">
                <Checkbox
                  checked={selectedRows.size === services.length}
                  onCheckedChange={toggleAllRows}
                />
              </th>
              <th className="py-4 px-4 text-left text-white">Service Title</th>
              <th className="py-4 px-4 text-left text-white">Category</th>
              <th className="py-4 px-4 text-left text-white">Rating</th>
              <th className="py-4 px-4 text-left text-white">Date</th>
              <th className="py-4 px-4 text-left text-white">Status</th>
              <th className="py-4 px-4 text-right text-white">Price</th>
              <th className="py-4 px-4 text-center text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.length > 0 ? (
              services.map((service) => (
                <tr key={service.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <Checkbox
                      checked={selectedRows.has(service.id)}
                      onCheckedChange={() => toggleRowSelection(service.id)}
                    />
                  </td>
                  <td className="py-4 px-4">{service.title}</td>
                  <td className="py-4 px-4">{service.category}</td>
                  <td className="py-4 px-4 font-medium">{service.rating.toFixed(1)} / 5</td>
                  <td className="py-4 px-4">{service.creationDate}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${getStatusColor(service.status)}`} />
                      <span className="capitalize">{service.status}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right font-medium">
                    ${service.price.toFixed(2)}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleView(service)}>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleEdit(service)}>
                            <Pencil className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => handleDeleteConfirm(service)}
                            className="text-red-600"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="py-24 text-center">
                  No results.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Utilisation des composants séparés */}
      <ViewServiceDialog
        open={viewDialogOpen}
        onOpenChange={setViewDialogOpen}
        service={selectedService}
      />

      <EditServiceDialog
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        service={selectedService}
        onSave={handleSaveEdit}
      />

      <DeleteServiceDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        service={selectedService}
        onConfirmDelete={handleDelete}
      />
    </div>
  )
}