'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/DropDown'
import { useTheme } from 'next-themes'

export default function ThemeSwitcher() {
  const { setTheme } = useTheme()

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Sun size={20} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setTheme('light')} className='gap-2'>
            <Sun size={20} />
            <span className='text-base'>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')} className='gap-2'>
            <Moon size={20} />
            <span className='text-base'>Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme('system')}
            className='gap-2'
          >
            <Monitor size={20} />
            <span className='text-base'>System</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <button></button>
    </div>
  )
}
