import { cn } from '@/lib/utils'

export function PageBackground({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('min-h-screen bg-[#f4f6f8] text-slate-800 flex flex-col', className)}>
      {children}
    </div>
  )
}

