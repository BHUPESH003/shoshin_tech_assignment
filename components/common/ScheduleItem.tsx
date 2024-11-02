import { MoreVertical } from "lucide-react"
import { Button } from "../ui/button"

// Component for rendering individual schedule items
const ScheduleItem = ({ title, time, category, isNew = false }: {
    title: string
    time: string
    category: string
    isNew?: boolean
  }) => (
    <div className="p-4 border-b last:border-b-0">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{category}</p>
          <h4 className="font-medium mt-1">{title}</h4>
          <p className="text-sm text-muted-foreground mt-1">{time}</p>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )

  export default ScheduleItem