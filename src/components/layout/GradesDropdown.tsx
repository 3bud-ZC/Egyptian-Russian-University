import { Link } from 'react-router-dom'

interface GradesDropdownProps {
  onClose: () => void
  onNavigate?: (path: string) => void
}

const gradeItems = [
  { label: 'Academic Transcript', to: '/grades/transcript' },
  { label: 'Grade Report', to: '/grades/report' },
  { label: 'Request Transcript', to: '/grades/transcript' },
  { label: 'Attendance Report', to: '/grades/report' },
]

export function GradesDropdown({ onClose, onNavigate }: GradesDropdownProps) {
  return (
    <div className="fixed inset-0 z-30" onClick={onClose}>
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute top-16 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-[calc(50%-12rem)]">
        <div
          className="bg-white text-slate-700 rounded-b-lg shadow-header min-w-[220px] py-2 border-t border-slate-100"
          onClick={(e) => e.stopPropagation()}
        >
          {gradeItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => {
                onClose()
                onNavigate?.(item.to)
              }}
              className="block px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-eru-700 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
