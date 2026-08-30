import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  topBorder?: 'blue' | 'orange' | 'cyan' | 'green' | 'none'
  noPadding?: boolean
}

const borderColor = {
  blue: 'border-t-4 border-t-eru-700',
  orange: 'border-t-4 border-t-amber-500',
  cyan: 'border-t-4 border-t-cyan-600',
  green: 'border-t-4 border-t-[#1b7e42]',
  none: '',
}

export function Card({ children, className, topBorder = 'none', noPadding = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-none shadow-none border border-slate-300',
        borderColor[topBorder],
        !noPadding && 'p-4 sm:p-6',
        className
      )}
    >
      {children}
    </div>
  )
}

