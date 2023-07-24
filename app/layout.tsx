import { cn } from "@/utils/helper"
import "./globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Cingeek",
  description: "Movie app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, "")}>
        {/* Navigation */}
        <Header />
        {children}
      </body>
    </html>
  )
}
