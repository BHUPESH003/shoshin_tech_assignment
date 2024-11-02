import { MoreVertical, Star } from "lucide-react"
import { Button } from "../ui/button"

// Component for rendering individual announcement items
const AnnouncementItem = ({ title, time, isNew = false }: {
    title: string
    time: string
    isNew?: boolean
  }) => (
    <div className="p-4 border-b last:border-b-0">
      <div className="flex justify-between items-start gap-4">
        <div>
          <h4 className="font-medium">{title}</h4>
          <p className="text-sm text-muted-foreground mt-1">{time}</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Star className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )

  export default AnnouncementItem