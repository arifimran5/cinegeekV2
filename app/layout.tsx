import { cn } from '@/utils/helper'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header/Header'
import GlobalContextProvider from '@/components/GlobalContextProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cingeek',
  description: 'Movie app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn(inter.className, '')}>
        <GlobalContextProvider>
          {/* Navigation */}
          <Header />
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  )
}
