import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, ChevronDown, X, ShieldAlert, LogOut } from 'lucide-react'
import { FullMenuOverlay } from './FullMenuOverlay'
import { GradesDropdown } from './GradesDropdown'
import { mockStudent } from '@/data/mockStudent'
import { cn } from '@/lib/utils'

interface TopNavProps {
  variant?: 'login' | 'portal'
  pageLabel?: string
}

const navItems = [
  { label: 'Today\'s Overview', labelAr: 'الرئيسية', to: '/dashboard', hasDropdown: false },
  { label: 'Registration', labelAr: 'التسجيل', to: '/registration/schedule', hasDropdown: false },
  { label: 'Grade Report', labelAr: 'النتائج', to: '/grades/report', hasDropdown: true },
  { label: 'Unofficial Transcript', labelAr: 'السجل الأكاديمي', to: '/grades/transcript', hasDropdown: false },
  { label: 'Finances', labelAr: 'الرسوم والمصروفات', to: '/finances/balance', hasDropdown: false },
]

export function TopNav({ variant = 'portal', pageLabel }: TopNavProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [gradesOpen, setGradesOpen] = useState(false)

  const isLogin = variant === 'login'

  return (
    <>
      <header className="bg-white border-b border-slate-300 relative z-40">
        {/* Top University Identity & Student Info Row */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-2.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link to={isLogin ? '/login' : '/dashboard'} className="flex items-center gap-2 sm:gap-3">
              <img
                src="/eru-logo.png"
                alt="Egyptian Russian University"
                className="h-9 sm:h-11 w-auto object-contain"
              />
            </Link>
          </div>

          {!isLogin ? (
            <div className="flex items-center gap-4 text-right">
              <div className="hidden sm:block">
                <div className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  Welcome, <span className="text-slate-800">{mockStudent.fullName}</span>
                </div>
                <div className="text-[11px] text-slate-600 mt-0.5 flex items-center justify-end gap-1.5 flex-wrap">
                  <span className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-medium">Student View</span>
                  <span>|</span>
                  <span className="font-medium text-emerald-800">{mockStudent.faculty}</span>
                  <span>|</span>
                  <span className="text-slate-500">{mockStudent.academicYear} ({mockStudent.semester})</span>
                </div>
              </div>

              <div className="flex items-center gap-1 sm:gap-2">
                <Link
                  to="/login"
                  title="Sign out / تسجيل خروج"
                  className="hidden md:flex items-center gap-1 text-[11px] text-slate-600 hover:text-red-700 px-2 py-1 border border-slate-200 rounded hover:bg-slate-50 transition"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign out</span>
                </Link>

                <button
                  onClick={() => setMenuOpen((v) => !v)}
                  className="p-1.5 hover:bg-slate-100 rounded border border-slate-300 transition text-slate-700 lg:hidden"
                  aria-label="Menu"
                >
                  {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          ) : (
            pageLabel && (
              <div className="text-xs sm:text-sm font-semibold tracking-wider text-slate-600">
                {pageLabel}
              </div>
            )
          )}
        </div>

        {/* Bottom Dark Gray Navigation Strip with ERU Green Accent */}
        {!isLogin && (
          <div className="bg-[#2d3748] text-white border-t border-[#1a202c]">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 flex items-center justify-between">
              <nav className="hidden lg:flex items-center">
                {navItems.map((item) => {
                  const isActive =
                    item.to !== '#' && location.pathname === item.to || (item.to !== '/dashboard' && location.pathname.startsWith(item.to))
                  return (
                    <div key={item.label} className="relative">
                      {item.hasDropdown ? (
                        <button
                          onClick={() => setGradesOpen((v) => !v)}
                          className={cn(
                            'flex items-center gap-1 px-3.5 py-2 text-xs font-semibold tracking-wide transition border-b-2 border-transparent text-slate-200 hover:text-white hover:bg-[#374151]',
                            gradesOpen || isActive
                              ? 'bg-[#1b7e42] text-white border-emerald-400 font-bold'
                              : ''
                          )}
                        >
                          <span>{item.label}</span>
                          <span className="text-[10px] text-slate-300">/ {item.labelAr}</span>
                          <ChevronDown className="w-3.5 h-3.5 ml-0.5 opacity-80" />
                        </button>
                      ) : (
                        <Link
                          to={item.to}
                          className={cn(
                            'flex items-center gap-1 px-3.5 py-2 text-xs font-semibold tracking-wide transition border-b-2 border-transparent text-slate-200 hover:text-white hover:bg-[#374151]',
                            isActive
                              ? 'bg-[#1b7e42] text-white border-emerald-400 font-bold'
                              : ''
                          )}
                        >
                          <span>{item.label}</span>
                          <span className="text-[10px] text-slate-300">/ {item.labelAr}</span>
                        </Link>
                      )}
                    </div>
                  )
                })}
              </nav>

              {/* Unofficial Record Persistent Indicator Badge */}
              <div className="flex items-center justify-between w-full lg:w-auto py-1.5 text-[11px] gap-2 overflow-hidden">
                <div className="flex items-center gap-1.5 text-amber-300 bg-black/30 px-2 py-0.5 border border-amber-500/30 shrink-0">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="font-semibold tracking-wide text-[10px] sm:text-[11px]">Unofficial Academic Record</span>
                  <span className="text-[10px] text-amber-200/80 hidden md:inline">| سجل غير رسمي</span>
                </div>

                <div className="hidden sm:flex items-center gap-2 lg:hidden truncate">
                  <span className="text-[11px] text-slate-300 font-medium truncate">{mockStudent.fullName} ({mockStudent.studentId})</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {gradesOpen && !menuOpen && (
        <GradesDropdown
          onClose={() => setGradesOpen(false)}
          onNavigate={(path: string) => {
            setGradesOpen(false)
            navigate(path)
          }}
        />
      )}

      {menuOpen && <FullMenuOverlay onClose={() => setMenuOpen(false)} />}
    </>
  )
}

