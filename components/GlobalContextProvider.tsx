'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'

export default function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ThemeProvider enableSystem attribute='class'>
        {children}
      </ThemeProvider>
    </>
  )
}
