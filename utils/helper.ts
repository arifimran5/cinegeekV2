import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRunningTime(time: number | undefined) {
  if (!time) return "";
  let hr = Math.floor(time / 60)
  let min = time - (hr * 60)

  return `${hr}hr ${min}m`
}