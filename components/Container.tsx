import { cn } from "@/utils/helper"
import React from "react"

function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("max-w-6xl mx-auto px-4 xl:px-0", className)}>
      {children}
    </div>
  )
}

export default Container
