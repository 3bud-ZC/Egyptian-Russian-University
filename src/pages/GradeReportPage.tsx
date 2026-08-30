import { useState } from 'react'
import { AppShell } from '@/components/layout/AppShell'
import { PrintLink } from '@/components/ui/PrintLink'
import { gradeReportRows, calculateTotals, type GradeRow } from '@/data/mockGrades'
import { mockStudent } from '@/data/mockStudent'
import { AlertCircle, FileSpreadsheet } from 'lucide-react'

const academicYears = ['2025/2026', '2024/2025', '2023/2024']
const semesters = ['Spring / الربيعي', 'Fall / الخريفي', 'Summer / الصيفي']

function GradeTableRow({ row, index }: { row: GradeRow; index: number }) {
  return (
    <tr className={`border-b border-slate-300 text-xs sm:text-[13px] transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'}`}>
      <td className="py-2 px-3 font-bold text-slate-900 border-r border-slate-200 whitespace-nowrap">
        {row.course}
      </td>
      <td className="py-2 px-3 text-slate-800 border-r border-slate-200 min-w-[200px]">
        <div className="font-semibold text-slate-900">{row.title}</div>
        <div className="text-[11px] text-slate-600 mt-0.5">{row.titleAr}</div>
      </td>
      <td className="py-2 px-3 text-slate-800 font-semibold text-center border-r border-slate-200 whitespace-nowrap">
        {row.credits.toFixed(2)}
      </td>
      <td className="py-2 px-3 text-center border-r border-slate-200 whitespace-nowrap">
        <span className="inline-block px-2 py-0.5 text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-300 rounded-none">
          Active / نشط
        </span>
      </td>
      <td className="py-2 px-3 text-slate-800 font-semibold text-center border-r border-slate-200 whitespace-nowrap">
        {row.qualityPoints.toFixed(2)}
      </td>
      <td className="py-2 px-3 text-center border-r border-slate-200 whitespace-nowrap">
        <span className="inline-block px-2 py-0.5 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 rounded-none">
          Pass / ناجح
        </span>
      </td>
      <td className="py-2 px-3 text-slate-950 font-bold text-center text-sm whitespace-nowrap">
        {row.finalGrade}
      </td>
    </tr>
  )
}

export default function GradeReportPage() {
  const [selectedYear, setSelectedYear] = useState('2025/2026')
  const [selectedSemester, setSelectedSemester] = useState('Spring / الربيعي')

  const totals = calculateTotals(gradeReportRows)

  return (
    <AppShell>
      <div className="max-w-6xl mx-auto space-y-4">
        {/* Unofficial Academic Record Notice */}
        <div className="bg-amber-50 border-l-4 border-amber-500 border border-amber-200 p-2.5 sm:p-3 text-xs text-amber-900 flex items-center justify-between gap-3 shadow-none">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
            <div>
              <span className="font-bold">Unofficial Academic Record:</span>{' '}
              <span>This document is for internal student reference only and is not an official university certificate.</span>{' '}
              <span className="text-amber-800 block sm:inline mt-0.5 sm:mt-0 font-medium">| هذا السجل الأكاديمي للاطلاع الداخلي فقط ولا يعتد به كشهادة رسمية.</span>
            </div>
          </div>
          <div className="hidden md:block shrink-0">
            <span className="bg-amber-200/70 text-amber-900 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
              Student Copy
            </span>
          </div>
        </div>

        {/* Page Title & Controls Strip */}
        <div className="bg-white border border-slate-300 p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-none">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-[#2d3748] text-white">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                Academic Results & Grade Report / تقرير نتائج المقررات
              </h1>
              <p className="text-[11px] text-slate-600">
                {mockStudent.university} — {mockStudent.faculty}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 text-xs print:hidden">
            <div className="flex items-center gap-1 bg-[#f4f6f8] border border-slate-300 px-2 py-1">
              <span className="text-slate-600 font-medium">Year:</span>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-transparent font-semibold text-slate-900 focus:outline-none cursor-pointer"
              >
                {academicYears.map((yr) => (
                  <option key={yr} value={yr}>{yr}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-1 bg-[#f4f6f8] border border-slate-300 px-2 py-1">
              <span className="text-slate-600 font-medium">Semester:</span>
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="bg-transparent font-semibold text-slate-900 focus:outline-none cursor-pointer"
              >
                {semesters.map((sem) => (
                  <option key={sem} value={sem}>{sem}</option>
                ))}
              </select>
            </div>

            <PrintLink />
          </div>
        </div>

        {/* Traditional Bordered Student Data Section */}
        <div className="bg-white border border-slate-300 shadow-none">
          <div className="bg-[#2d3748] text-white px-3 py-1.5 text-xs font-bold flex items-center justify-between">
            <span>Student Data / بيانات الطالب</span>
            <span className="text-[11px] text-slate-300 font-normal">{mockStudent.academicYear} — {mockStudent.semester}</span>
          </div>

          <div className="p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-2.5 gap-x-4 text-xs border-b border-slate-200">
            <div>
              <span className="text-slate-500 block text-[11px]">Student Name / اسم الطالب:</span>
              <span className="font-bold text-slate-900 text-[13px]">{mockStudent.fullName}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">Student ID / الرقم الجامعي:</span>
              <span className="font-bold text-slate-900 text-[13px]">{mockStudent.studentId}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">Faculty / الكلية:</span>
              <span className="font-semibold text-slate-900">{mockStudent.faculty}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">Program / البرنامج:</span>
              <span className="font-semibold text-slate-900">{mockStudent.program}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">Level / المستوى:</span>
              <span className="font-semibold text-slate-900">{mockStudent.year} ({mockStudent.yearAr})</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">Degree / الدرجة العلمية:</span>
              <span className="font-semibold text-slate-900">{mockStudent.degree}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">Academic Advisor / المرشد الأكاديمي:</span>
              <span className="font-semibold text-slate-900">{mockStudent.advisor}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[11px]">National ID / الرقم القومي:</span>
              <span className="font-semibold text-slate-900">{mockStudent.nationalId}</span>
            </div>
          </div>
        </div>

        {/* Compact Horizontal Academic Summary Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 text-xs">
          <div className="bg-white border border-slate-300 p-2.5 text-center shadow-none">
            <div className="text-[11px] text-slate-600 font-medium leading-tight">Term GPA<br />المعدل الفصلي</div>
            <div className="text-lg sm:text-xl font-extrabold text-[#1b7e42] mt-1">{totals.gpa.toFixed(2)}</div>
          </div>
          <div className="bg-white border border-slate-300 p-2.5 text-center shadow-none">
            <div className="text-[11px] text-slate-600 font-medium leading-tight">CGPA<br />المعدل التراكمي</div>
            <div className="text-lg sm:text-xl font-extrabold text-[#1b7e42] mt-1">{totals.gpa.toFixed(2)}</div>
          </div>
          <div className="bg-white border border-slate-300 p-2.5 text-center shadow-none">
            <div className="text-[11px] text-slate-600 font-medium leading-tight">Passed Credits<br />الساعات المكتسبة</div>
            <div className="text-lg sm:text-xl font-bold text-slate-900 mt-1">{totals.totalPassed.toFixed(2)}</div>
          </div>
          <div className="bg-white border border-slate-300 p-2.5 text-center shadow-none">
            <div className="text-[11px] text-slate-600 font-medium leading-tight">Attempted Credits<br />الساعات المسجلة</div>
            <div className="text-lg sm:text-xl font-bold text-slate-900 mt-1">{totals.totalAttempted.toFixed(2)}</div>
          </div>
          <div className="bg-white border border-slate-300 p-2.5 text-center shadow-none col-span-2 sm:col-span-1">
            <div className="text-[11px] text-slate-600 font-medium leading-tight">Quality Points<br />نقاط الجودة</div>
            <div className="text-lg sm:text-xl font-bold text-slate-900 mt-1">{totals.totalQualityPoints.toFixed(2)}</div>
          </div>
        </div>

        {/* Traditional Grades Table */}
        <div className="bg-white border border-slate-300 shadow-none">
          <div className="bg-[#2d3748] text-white px-3 py-1.5 text-xs font-bold flex items-center justify-between">
            <span>Course Results Table / جدول درجات المقررات الدراسية</span>
            <span className="text-[11px] text-slate-300 font-normal">7 Distinct Courses / 7 مقررات</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-200 text-slate-900 border-b border-slate-300 text-xs font-bold uppercase tracking-wider">
                  <th className="py-2.5 px-3 border-r border-slate-300 whitespace-nowrap">
                    رمز المقرر<br /><span className="text-[10px] text-slate-600 font-normal normal-case">Course Code</span>
                  </th>
                  <th className="py-2.5 px-3 border-r border-slate-300">
                    اسم المقرر<br /><span className="text-[10px] text-slate-600 font-normal normal-case">Course Title</span>
                  </th>
                  <th className="py-2.5 px-3 border-r border-slate-300 text-center whitespace-nowrap">
                    الساعات<br /><span className="text-[10px] text-slate-600 font-normal normal-case">Credits</span>
                  </th>
                  <th className="py-2.5 px-3 border-r border-slate-300 text-center whitespace-nowrap">
                    حالة المقرر<br /><span className="text-[10px] text-slate-600 font-normal normal-case">Status</span>
                  </th>
                  <th className="py-2.5 px-3 border-r border-slate-300 text-center whitespace-nowrap">
                    النقاط<br /><span className="text-[10px] text-slate-600 font-normal normal-case">Points</span>
                  </th>
                  <th className="py-2.5 px-3 border-r border-slate-300 text-center whitespace-nowrap">
                    ناجح/راسب<br /><span className="text-[10px] text-slate-600 font-normal normal-case">Result</span>
                  </th>
                  <th className="py-2.5 px-3 text-center whitespace-nowrap">
                    التقدير<br /><span className="text-[10px] text-slate-600 font-normal normal-case">Grade</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {gradeReportRows.map((row, i) => (
                  <GradeTableRow key={row.course} row={row} index={i} />
                ))}

                {/* Table Totals Row */}
                <tr className="bg-slate-100 font-bold text-slate-900 border-t-2 border-slate-400 text-xs sm:text-sm">
                  <td className="py-2.5 px-3 border-r border-slate-300" colSpan={2}>
                    <div className="flex items-center justify-between">
                      <span>Total / الإجمالي:</span>
                      <span className="text-xs text-slate-600 font-normal">Calculated Term GPA: <strong className="text-slate-900">{totals.gpa.toFixed(2)}</strong></span>
                    </div>
                  </td>
                  <td className="py-2.5 px-3 text-center border-r border-slate-300 font-extrabold text-slate-950">
                    {totals.totalCredits.toFixed(2)}
                  </td>
                  <td className="py-2.5 px-3 text-center border-r border-slate-300 text-slate-600 font-semibold text-xs">
                    All Passed
                  </td>
                  <td className="py-2.5 px-3 text-center border-r border-slate-300 font-extrabold text-slate-950">
                    {totals.totalQualityPoints.toFixed(2)}
                  </td>
                  <td className="py-2.5 px-3 text-center border-r border-slate-300 text-emerald-800 font-bold">
                    Pass
                  </td>
                  <td className="py-2.5 px-3 text-center font-extrabold text-slate-950">
                    GPA {totals.gpa.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Note */}
        <div className="bg-white border border-slate-300 p-3 text-[11px] text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-2 shadow-none">
          <div>
            <span>Egyptian Russian University — Self Service Academic Portal</span>
          </div>
          <div>
            <span>Official student inquiries: registrar@eru.edu.eg</span>
          </div>
        </div>
      </div>
    </AppShell>
  )
}

