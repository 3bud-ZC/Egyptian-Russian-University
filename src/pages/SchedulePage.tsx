import { useState, useMemo } from 'react'
import { AppShell } from '@/components/layout/AppShell'
import { Card } from '@/components/ui/Card'
import { SelectBox } from '@/components/ui/SelectBox'
import { PrintLink } from '@/components/ui/PrintLink'
import { PageHeader } from '@/components/ui/PageHeader'
import { ScheduleGrid } from '@/components/portal/ScheduleGrid'
import { mockStudent } from '@/data/mockStudent'
import { mockCourses, periodOptions, type Course } from '@/data/mockCourses'
import { ChevronDown } from 'lucide-react'

const daysOrder = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const dayFilterOptions = ['All Days', ...daysOrder]

type SortKey = 'code' | 'title' | 'credits' | 'dayTime'

export default function SchedulePage() {
  const [period, setPeriod] = useState('2025/2026 - Spring')
  const [showCart, setShowCart] = useState(true)
  const [showWaitlist, setShowWaitlist] = useState(false)
  const [sortKey, setSortKey] = useState<SortKey>('dayTime')
  const [dayFilter, setDayFilter] = useState('All Days')

  const filteredCourses = useMemo(() => {
    let list = [...mockCourses]
    if (dayFilter !== 'All Days') {
      list = list.filter((c) => c.days.includes(dayFilter))
    }
    return list.sort((a, b) => {
      if (sortKey === 'code') return a.code.localeCompare(b.code)
      if (sortKey === 'title') return a.title.localeCompare(b.title)
      if (sortKey === 'credits') return a.credits - b.credits
      const dayDiff = daysOrder.indexOf(a.days[0]) - daysOrder.indexOf(b.days[0])
      if (dayDiff !== 0) return dayDiff
      return a.startTime.localeCompare(b.startTime)
    })
  }, [sortKey, dayFilter])

  return (
    <AppShell>
      <div className="space-y-4 max-w-6xl mx-auto">
        <PageHeader title="My Schedule / الجدول الدراسي" />

        <Card>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <SelectBox value={period} options={periodOptions} onChange={setPeriod} />
              <label className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={showCart}
                  onChange={(e) => setShowCart(e.target.checked)}
                  className="rounded-none border-slate-300"
                />
                Cart
              </label>
              <label className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={showWaitlist}
                  onChange={(e) => setShowWaitlist(e.target.checked)}
                  className="rounded-none border-slate-300"
                />
                Waitlist
              </label>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <PrintLink />
              <button className="bg-[#2d3748] hover:bg-slate-800 text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-none transition">
                View Cart / عرض السلة
              </button>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm">
            <div>
              <span className="text-slate-500">Year / السنة:</span>{' '}
              <span className="font-semibold text-slate-900">{mockStudent.year}</span>
            </div>
            <div>
              <span className="text-slate-500">Level / المستوى:</span>{' '}
              <span className="font-semibold text-slate-900">{mockStudent.program}</span>
            </div>
            <div>
              <span className="text-slate-500">Advisor / المرشد:</span>{' '}
              <span className="font-semibold text-slate-900">{mockStudent.advisor}</span>
            </div>
          </div>
        </Card>

        <Card>
          <ScheduleGrid />
        </Card>

        <Card>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className="text-sm sm:text-base font-bold text-slate-900">Registered Courses / المقررات المسجلة ({filteredCourses.length})</h2>
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <select
                  value={dayFilter}
                  onChange={(e) => setDayFilter(e.target.value)}
                  className="appearance-none border border-slate-300 pl-3 pr-8 py-1.5 text-xs sm:text-sm focus:outline-none bg-white rounded-none"
                >
                  {dayFilterOptions.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              <div className="relative">
                <select
                  value={sortKey}
                  onChange={(e) => setSortKey(e.target.value as SortKey)}
                  className="appearance-none border border-slate-300 pl-3 pr-8 py-1.5 text-xs sm:text-sm focus:outline-none bg-white rounded-none"
                >
                  <option value="dayTime">Sort by Day & Time</option>
                  <option value="code">Sort by Code</option>
                  <option value="title">Sort by Title</option>
                  <option value="credits">Sort by Credits</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
          <div className="overflow-x-auto border border-slate-300 bg-white">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-200 text-slate-900 border-b border-slate-300 font-bold">
                  <th className="py-2.5 px-3 sm:px-4 text-[10px] sm:text-xs uppercase tracking-wide border-r border-slate-300">Code<br /><span className="font-normal text-slate-600 normal-case">الرمز</span></th>
                  <th className="py-2.5 px-3 sm:px-4 text-[10px] sm:text-xs uppercase tracking-wide border-r border-slate-300">Course<br /><span className="font-normal text-slate-600 normal-case">المقرر</span></th>
                  <th className="py-2.5 px-3 sm:px-4 text-[10px] sm:text-xs uppercase tracking-wide border-r border-slate-300">Days<br /><span className="font-normal text-slate-600 normal-case">الأيام</span></th>
                  <th className="py-2.5 px-3 sm:px-4 text-[10px] sm:text-xs uppercase tracking-wide border-r border-slate-300">Time<br /><span className="font-normal text-slate-600 normal-case">الوقت</span></th>
                  <th className="py-2.5 px-3 sm:px-4 text-[10px] sm:text-xs uppercase tracking-wide text-center">Credits<br /><span className="font-normal text-slate-600 normal-case">الساعات</span></th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses.map((course: Course, i: number) => (
                  <tr key={course.code} className={`border-b border-slate-300 text-xs sm:text-sm transition-colors hover:bg-slate-50 ${i % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'}`}>
                    <td className="py-2.5 px-3 sm:px-4 font-bold text-slate-900 border-r border-slate-300">{course.code}</td>
                    <td className="py-2.5 px-3 sm:px-4 text-slate-800 border-r border-slate-300">
                      <div className="font-semibold text-slate-900">{course.title}</div>
                      <div className="text-[10px] sm:text-[11px] text-slate-600">{course.location}</div>
                    </td>
                    <td className="py-2.5 px-3 sm:px-4 text-slate-700 border-r border-slate-300">{course.days.join(', ')}</td>
                    <td className="py-2.5 px-3 sm:px-4 text-slate-700 border-r border-slate-300">{course.startTime} - {course.endTime}</td>
                    <td className="py-2.5 px-3 sm:px-4 text-slate-900 font-bold text-center">{course.credits.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredCourses.length === 0 && (
            <div className="py-8 text-center text-sm text-slate-500">
              No courses on the selected day.
            </div>
          )}
        </Card>
      </div>
    </AppShell>
  )
}
