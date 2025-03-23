import * as React from "react"
import { cn } from "@/lib/utils"

interface SheetProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const Sheet = React.forwardRef<HTMLDivElement, SheetProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("", className)} {...props}>
      {children}
    </div>
  )
)
Sheet.displayName = "Sheet"

const SheetTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn("", className)}
    {...props}
  />
))
SheetTrigger.displayName = "SheetTrigger"

const SheetContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { side?: "top" | "right" | "bottom" | "left" }
>(({ className, children, side = "right", ...props }, ref) => {
  const sideStyles = {
    top: "inset-x-0 top-0 border-b h-auto max-h-screen w-full",
    right: "inset-y-0 right-0 h-full w-3/4 max-w-sm border-l",
    bottom: "inset-x-0 bottom-0 border-t h-auto max-h-screen w-full",
    left: "inset-y-0 left-0 h-full w-3/4 max-w-sm border-r",
  }
  
  return (
    <div
      ref={ref}
      className={cn(
        "fixed z-50 bg-background p-6 shadow-lg",
        sideStyles[side],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
})
SheetContent.displayName = "SheetContent"

const SheetHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
    {...props}
  />
))
SheetHeader.displayName = "SheetHeader"

const SheetFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
))
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
))
SheetTitle.displayName = "SheetTitle"

const SheetDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
SheetDescription.displayName = "SheetDescription"

export {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} 