import * as React from "react"
import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-2", className)}
      role="radiogroup"
      {...props}
    />
  )
})
RadioGroup.displayName = "RadioGroup"

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, id, label, ...props }, ref) => {
    return (
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          ref={ref}
          id={id}
          className={cn(
            "h-4 w-4 rounded-full border border-primary text-primary focus:ring-primary",
            className
          )}
          {...props}
        />
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)
Radio.displayName = "Radio"

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, id, label, ...props }, ref) => {
    return (
      <div className="flex items-center space-x-2">
        <input
          type="radio"
          ref={ref}
          id={id}
          className={cn(
            "h-4 w-4 rounded-full border border-primary text-primary focus:ring-primary",
            className
          )}
          {...props}
        />
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, Radio, RadioGroupItem } 