import { mockStudent } from '@/data/mockStudent'

export function Footer() {
  return (
    <footer className="mt-8 py-6 border-t border-slate-300 text-xs text-slate-600 bg-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <p className="font-bold text-slate-800">Egyptian Russian University — Student Self-Service Portal</p>
          <p className="mt-0.5 text-[11px] text-slate-500">{mockStudent.universityAr} — {mockStudent.facultyAr}</p>
        </div>
        <div className="text-[11px] md:text-right">
          <p className="font-semibold text-slate-700">
            {mockStudent.fullName} <span className="mx-1">|</span> {mockStudent.studentId}
          </p>
          <p className="text-amber-800 mt-0.5">Unofficial Student Academic View | للاطلاع الأكاديمي غير الرسمي</p>
        </div>
      </div>
    </footer>
  )
}

