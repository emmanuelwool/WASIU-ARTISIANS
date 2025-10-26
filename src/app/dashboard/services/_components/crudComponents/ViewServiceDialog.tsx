import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

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

interface ViewServiceDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  service: Service | null
}

export function ViewServiceDialog({ open, onOpenChange, service }: ViewServiceDialogProps) {
  if (!service) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Service Details</DialogTitle>
          <DialogDescription>
            Complete information about this service
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label className="font-semibold">Title</Label>
            <p>{service.title}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label className="font-semibold">Category</Label>
              <p>{service.category}</p>
            </div>
            <div className="grid gap-2">
              <Label className="font-semibold">Price</Label>
              <p>${service.price.toFixed(2)}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label className="font-semibold">Status</Label>
              <p className="capitalize">{service.status}</p>
            </div>
            <div className="grid gap-2">
              <Label className="font-semibold">Rating</Label>
              <p>{service.rating.toFixed(1)} / 5</p>
            </div>
          </div>

          <div className="grid gap-2">
            <Label className="font-semibold">Duration</Label>
            <p>{service.duration || "N/A"}</p>
          </div>

          <div className="grid gap-2">
            <Label className="font-semibold">Location</Label>
            <p>{service.location || "N/A"}</p>
          </div>

          <div className="grid gap-2">
            <Label className="font-semibold">Phone</Label>
            <p>{service.phone || "N/A"}</p>
          </div>

          <div className="grid gap-2">
            <Label className="font-semibold">Description</Label>
            <p className="text-sm text-gray-600">{service.description || "N/A"}</p>
          </div>

          <div className="grid gap-2">
            <Label className="font-semibold">Creation Date</Label>
            <p>{service.creationDate}</p>
          </div>
        </div>

        <DialogFooter>
          <Button onClick={() => onOpenChange(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}