import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { mockStudent } from '@/data/mockStudent'

interface FullMenuOverlayProps {
  onClose: () => void
}

const menuGroups = [
  {
    title: 'Registration',
    items: [
      { label: 'Courses', to: '/registration/schedule' },
      { label: 'My Schedule', to: '/registration/schedule' },
      { label: 'Academic Plan', to: '/registration/schedule' },
      { label: 'What if?', to: '/registration/schedule' },
    ],
  },
  {
    title: 'Grades',
    items: [
      { label: 'Academic Transcript', to: '/grades/transcript' },
      { label: 'Grade Report', to: '/grades/report' },
      { label: 'Request transcript', to: '/grades/transcript' },
      { label: 'Attendance Report', to: '/grades/report' },
    ],
  },
  {
    title: 'Finances',
    items: [
      { label: 'Balance', to: '/finances/balance' },
      { label: 'Statement', to: '/finances/balance' },
    ],
  },
  {
    title: 'Search',
    items: [
      { label: 'Course', to: '/registration/schedule' },
      { label: 'Section', to: '/registration/schedule' },
    ],
  },
  {
    title: 'Account',
    items: [
      { label: 'Sign out', to: '/login' },
    ],
  },
]

export function FullMenuOverlay({ onClose }: FullMenuOverlayProps) {
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-x-0 top-16 bottom-0 bg-white overflow-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-end mb-6">
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full shadow-sm transition border border-slate-200">
              <X className="w-6 h-6 text-eru-900" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {menuGroups.map((group) => (
              <div key={group.title} className="bg-white rounded-lg shadow-card p-5">
                <h3 className="text-sm font-bold text-eru-900 uppercase tracking-wide mb-4 border-b border-slate-100 pb-2">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.to}
                        onClick={onClose}
                        className="text-sm text-slate-600 hover:text-eru-700 hover:underline font-medium"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 text-center text-xs text-slate-500">
            <p className="font-semibold text-slate-700">Powered by Egyptian Russian University</p>
            <p className="mt-2 hover:underline cursor-pointer">Privacy Notice</p>
            <p className="mt-4 text-slate-400">Student: {mockStudent.fullName} ({mockStudent.studentId})</p>
          </div>
        </div>
      </div>
    </div>
  )
}
