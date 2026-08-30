import { useState } from 'react'
import { Calendar as CalendarIcon, FileSpreadsheet, GraduationCap, Clock, CreditCard } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import { mockStudent } from '@/data/mockStudent'
import { gradeReportRows, calculateTotals } from '@/data/mockGrades'

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const june2026 = Array.from({ length: 30 }, (_, i) => i + 1)

export default function DashboardPage() {
  const selectedDate = 24
  const [month] = useState('June 2026')
  const firstDay = 0 // June 1, 2026 is Monday

  const totals = calculateTotals(gradeReportRows)

  return (
    <AppShell>
      <div className="space-y-4 max-w-6xl mx-auto">
        {/* Student Quick Summary Box */}
        <div className="bg-white border border-slate-300 shadow-none">
          <div className="bg-[#2d3748] text-white px-3 py-1.5 text-xs font-bold flex items-center justify-between">
            <span>Student Overview / بيانات الطالب والمستوى الأكاديمي</span>
            <span className="text-[11px] text-slate-300 font-normal">{mockStudent.academicYear} ({mockStudent.semester})</span>
          </div>

          <div className="p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-2 gap-x-4 text-xs border-b border-slate-200">
            <div>
              <span className="text-slate-500 block text-[11px]">Name (الاسم):</span>
              <span className="font-bold text-slate-900 text-sm">{mockStudent.fullName}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">Student ID (الرقم الجامعي):</span>
              <span className="font-bold text-slate-900 text-sm">{mockStudent.studentId}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">Faculty (الكلية):</span>
              <span className="font-semibold text-slate-900">{mockStudent.faculty}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">Program (البرنامج):</span>
              <span className="font-semibold text-slate-900">{mockStudent.program}</span>
            </div>
          </div>

          {/* Quick Academic KPIs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 bg-[#f8fafc] text-xs">
            <div className="p-3 border-r border-b sm:border-b-0 border-slate-300 text-center">
              <span className="text-[11px] text-slate-600 block">Term GPA / المعدل الفصلي</span>
              <strong className="text-base sm:text-lg font-extrabold text-[#1b7e42]">{totals.gpa.toFixed(2)}</strong>
            </div>
            <div className="p-3 border-r border-b sm:border-b-0 border-slate-300 text-center">
              <span className="text-[11px] text-slate-600 block">Cumulative GPA / التراكمي</span>
              <strong className="text-base sm:text-lg font-extrabold text-[#1b7e42]">{totals.gpa.toFixed(2)}</strong>
            </div>
            <div className="p-3 border-r border-slate-300 text-center">
              <span className="text-[11px] text-slate-600 block">Passed CH / الساعات</span>
              <strong className="text-base sm:text-lg font-bold text-slate-900">{totals.totalPassed.toFixed(2)}</strong>
            </div>
            <div className="p-3 text-center">
              <span className="text-[11px] text-slate-600 block">Registered Courses / المقررات</span>
              <strong className="text-base sm:text-lg font-bold text-slate-900">{gradeReportRows.length}</strong>
            </div>
          </div>
        </div>

        {/* Quick Action Portals */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <Link
            to="/grades/report"
            className="bg-white border border-slate-300 p-3 hover:border-slate-500 transition flex items-center gap-2.5 text-slate-800"
          >
            <div className="p-2 bg-[#2d3748] text-white shrink-0">
              <FileSpreadsheet className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-900">Grade Report</div>
              <div className="text-[10px] text-slate-500">نتائج المقررات والدرجات</div>
            </div>
          </Link>

          <Link
            to="/grades/transcript"
            className="bg-white border border-slate-300 p-3 hover:border-slate-500 transition flex items-center gap-2.5 text-slate-800"
          >
            <div className="p-2 bg-[#1b7e42] text-white shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-900">Transcript</div>
              <div className="text-[10px] text-slate-500">السجل الأكاديمي</div>
            </div>
          </Link>

          <Link
            to="/registration/schedule"
            className="bg-white border border-slate-300 p-3 hover:border-slate-500 transition flex items-center gap-2.5 text-slate-800"
          >
            <div className="p-2 bg-slate-700 text-white shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-900">My Schedule</div>
              <div className="text-[10px] text-slate-500">الجدول الدراسي</div>
            </div>
          </Link>

          <Link
            to="/finances/balance"
            className="bg-white border border-slate-300 p-3 hover:border-slate-500 transition flex items-center gap-2.5 text-slate-800"
          >
            <div className="p-2 bg-amber-700 text-white shrink-0">
              <CreditCard className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-900">Account Balance</div>
              <div className="text-[10px] text-slate-500">الرسوم والمصروفات</div>
            </div>
          </Link>
        </div>

        {/* Calendar and Announcements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-300 p-4 shadow-none">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
              <h2 className="text-sm font-bold text-slate-900">Academic Calendar / التقويم الدراسي</h2>
              <div className="text-xs font-semibold text-slate-600">{month}</div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs">
              {days.map((d) => (
                <div key={d} className="py-1.5 font-bold text-slate-700 bg-slate-100 border border-slate-200">
                  {d}
                </div>
              ))}
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {june2026.map((date) => {
                const isSelected = date === selectedDate
                return (
                  <div
                    key={date}
                    className={`py-1.5 cursor-pointer border text-xs ${isSelected
                      ? 'bg-[#2d3748] border-[#2d3748] text-white font-bold'
                      : 'border-slate-100 text-slate-800 hover:bg-slate-50'
                      }`}
                  >
                    {date}
                  </div>
                )
              })}
            </div>
            <div className="mt-4 flex flex-col items-center justify-center py-4 text-slate-500 text-xs">
              <CalendarIcon className="w-8 h-8 mb-1.5 text-slate-400" />
              <p>No events scheduled for Wednesday, June 24, 2026</p>
            </div>
          </div>

          <div className="bg-white border border-slate-300 p-4 shadow-none">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
              <h2 className="text-sm font-bold text-slate-900">Announcements / إعلانات الكلية والجامعة</h2>
              <span className="text-[11px] text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 border border-emerald-200">Official</span>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="p-2.5 bg-slate-50 border-l-4 border-emerald-600 border border-slate-200">
                <div className="font-bold text-slate-900">Spring 2025/2026 Final Results Announced</div>
                <div className="text-[11px] text-slate-600 mt-0.5">Faculty of Clinical Pharmacy results are now accessible via student self-service portal.</div>
                <div className="text-[10px] text-slate-400 mt-1">Date: 2026-06-24</div>
              </div>
              <div className="p-2.5 bg-slate-50 border-l-4 border-blue-600 border border-slate-200">
                <div className="font-bold text-slate-900">Summer Term Registration Notice</div>
                <div className="text-[11px] text-slate-600 mt-0.5">Registration for summer term courses will open as announced by the academic registrar.</div>
                <div className="text-[10px] text-slate-400 mt-1">Date: 2026-06-20</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  )
}

