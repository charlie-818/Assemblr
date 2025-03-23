import * as React from "react"
import { cn } from "@/lib/utils"

interface CalendarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("w-full p-3 bg-background border rounded-md", className)}
        {...props}
      >
        <div className="text-center mb-4">Calendar Component Placeholder</div>
      </div>
    )
  }
)
Calendar.displayName = "Calendar"

export { Calendar } 