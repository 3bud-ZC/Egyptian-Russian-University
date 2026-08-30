import { transcriptTerms } from '@/data/mockGrades'
import { mockStudent } from '@/data/mockStudent'
import { AlertCircle } from 'lucide-react'

export function TranscriptDocument() {
  const overall = transcriptTerms.reduce(
    (acc, term) => {
      acc.qualityPoints += term.termQualityPoints
      return acc
    },
    { qualityPoints: 0 }
  )

  const overallCredits = transcriptTerms.reduce((acc, t) => acc + t.termCredits, 0)
  const overallGpa = overallCredits > 0 ? Number((overall.qualityPoints / overallCredits).toFixed(2)) : 0

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {/* Unofficial Banner */}
      <div className="bg-amber-50 border-l-4 border-amber-500 border border-amber-200 p-2.5 sm:p-3 text-xs text-amber-900 flex items-center justify-between gap-3 shadow-none print:hidden">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
          <div>
            <span className="font-bold">Unofficial Academic Transcript:</span>{' '}
            <span>Issued for student reference only. Not an official university certificate.</span>{' '}
            <span className="text-amber-800 block sm:inline mt-0.5 sm:mt-0 font-medium">| هذا السجل الأكاديمي للاطلاع فقط ولا يعتد به كشهادة رسمية.</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-none shadow-none border border-slate-400 p-5 sm:p-8 md:p-10 print:shadow-none print:p-0 print:border-0">
        <div className="text-center border-b-2 border-slate-800 pb-5 mb-5">
          <img src="/eru-logo.png" alt="ERU" className="h-14 sm:h-16 w-auto mx-auto mb-3 object-contain" />
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 uppercase tracking-wide">Unofficial Academic Transcript</h2>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">Egyptian Russian University / الجامعة المصرية الروسية</h3>
          <p className="text-xs sm:text-sm text-slate-700 mt-1">Office of Academic Affairs & Registrar / إدارة شؤون الطلاب والتسجيل</p>
          <p className="text-xs sm:text-sm text-slate-600">{mockStudent.address}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm mb-6 sm:mb-8 text-slate-900 bg-slate-50 p-3 sm:p-4 border border-slate-300">
          <div className="space-y-1.5">
            <p><span className="font-bold text-slate-700">Student Name / اسم الطالب:</span> <strong className="text-slate-900">{mockStudent.fullName}</strong></p>
            <p><span className="font-bold text-slate-700">Student ID / الرقم الجامعي:</span> <strong className="text-slate-900">{mockStudent.studentId}</strong></p>
            <p><span className="font-bold text-slate-700">Program / البرنامج:</span> {mockStudent.program}</p>
          </div>
          <div className="space-y-1.5">
            <p><span className="font-bold text-slate-700">Degree / الدرجة:</span> {mockStudent.degree}</p>
            <p><span className="font-bold text-slate-700">Faculty / الكلية:</span> {mockStudent.faculty}</p>
            <p><span className="font-bold text-slate-700">Cumulative GPA / المعدل التراكمي:</span> <strong className="text-[#1b7e42] text-sm sm:text-base font-extrabold">{overallGpa.toFixed(2)}</strong></p>
          </div>
        </div>

        {transcriptTerms.map((term) => (
          <div key={term.term} className="mb-8">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-3 pb-2 border-b-2 border-slate-700 flex justify-between items-center">
              <span>Academic Term: {term.term}</span>
              <span className="text-xs sm:text-sm text-slate-600 font-normal">{term.termAr}</span>
            </h4>
            <div className="overflow-x-auto mb-3">
              <table className="w-full text-xs sm:text-sm border border-slate-300">
                <thead>
                  <tr className="bg-slate-200 text-left text-slate-900 border-b border-slate-300">
                    <th className="py-2 px-3 font-bold border-r border-slate-300">Course Code<br /><span className="text-[10px] text-slate-600 font-normal">رمز المقرر</span></th>
                    <th className="py-2 px-3 font-bold border-r border-slate-300">Course Title<br /><span className="text-[10px] text-slate-600 font-normal">اسم المقرر</span></th>
                    <th className="py-2 px-3 font-bold border-r border-slate-300 text-center">CH<br /><span className="text-[10px] text-slate-600 font-normal">الساعات</span></th>
                    <th className="py-2 px-3 font-bold border-r border-slate-300 text-center">Status<br /><span className="text-[10px] text-slate-600 font-normal">الحالة</span></th>
                    <th className="py-2 px-3 font-bold border-r border-slate-300 text-center">Points<br /><span className="text-[10px] text-slate-600 font-normal">النقاط</span></th>
                    <th className="py-2 px-3 font-bold text-center">Grade<br /><span className="text-[10px] text-slate-600 font-normal">التقدير</span></th>
                  </tr>
                </thead>
                <tbody>
                  {term.courses.map((c, i) => (
                    <tr key={c.course} className={`border-b border-slate-300 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                      <td className="py-2 px-3 border-r border-slate-300 font-bold text-slate-900">{c.course}</td>
                      <td className="py-2 px-3 border-r border-slate-300">
                        <div className="font-semibold text-slate-900">{c.title}</div>
                        <div className="text-[11px] text-slate-600">{c.titleAr}</div>
                      </td>
                      <td className="py-2 px-3 border-r border-slate-300 text-center font-semibold">{c.credits.toFixed(2)}</td>
                      <td className="py-2 px-3 border-r border-slate-300 text-center text-xs text-emerald-800 font-medium">{c.status} / نشط</td>
                      <td className="py-2 px-3 border-r border-slate-300 text-center font-semibold">{c.qualityPoints.toFixed(2)}</td>
                      <td className="py-2 px-3 text-center font-bold text-slate-900">{c.finalGrade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 text-xs sm:text-sm">
              <div className="border border-slate-300 bg-slate-50 p-2 sm:p-3 text-center">
                <div className="text-[10px] sm:text-xs text-slate-600 leading-tight">Term Credits<br />ساعات الفصل</div>
                <div className="font-bold text-slate-900 mt-0.5">{term.termCredits.toFixed(2)}</div>
              </div>
              <div className="border border-slate-300 bg-slate-50 p-2 sm:p-3 text-center">
                <div className="text-[10px] sm:text-xs text-slate-600 leading-tight">Term GPA<br />المعدل الفصلي</div>
                <div className="font-extrabold text-[#1b7e42] mt-0.5">{term.termGpa.toFixed(2)}</div>
              </div>
              <div className="border border-slate-300 bg-slate-50 p-2 sm:p-3 text-center">
                <div className="text-[10px] sm:text-xs text-slate-600 leading-tight">Earned Credits<br />الساعات المكتسبة</div>
                <div className="font-bold text-slate-900 mt-0.5">{term.termEarned.toFixed(2)}</div>
              </div>
              <div className="border border-slate-300 bg-slate-50 p-2 sm:p-3 text-center">
                <div className="text-[10px] sm:text-xs text-slate-600 leading-tight">Quality Points<br />نقاط الجودة</div>
                <div className="font-bold text-slate-900 mt-0.5">{term.termQualityPoints.toFixed(2)}</div>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-6 sm:mt-8 border-t-2 border-slate-700 pt-4">
          <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2 sm:mb-3">Overall Academic Summary / المجموع التراكمي العام</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-xs sm:text-sm">
            <div className="border border-slate-300 bg-slate-50 p-2.5 sm:p-3 text-center">
              <div className="text-[10px] sm:text-xs text-slate-600 leading-tight">Total Attempted Credits<br />إجمالي الساعات المسجلة</div>
              <div className="font-bold text-slate-900 mt-0.5 text-base">{overallCredits.toFixed(2)}</div>
            </div>
            <div className="border border-slate-300 bg-slate-50 p-2.5 sm:p-3 text-center">
              <div className="text-[10px] sm:text-xs text-slate-600 leading-tight">Total Quality Points<br />إجمالي نقاط الجودة</div>
              <div className="font-bold text-slate-900 mt-0.5 text-base">{overall.qualityPoints.toFixed(2)}</div>
            </div>
            <div className="border border-slate-300 bg-slate-50 p-2.5 sm:p-3 text-center">
              <div className="text-[10px] sm:text-xs text-slate-600 leading-tight">Cumulative GPA<br />المعدل التراكمي العام</div>
              <div className="font-extrabold text-[#1b7e42] mt-0.5 text-lg">{overallGpa.toFixed(2)}</div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-slate-600 border-t border-slate-200 pt-4">
          <p className="font-semibold text-slate-800">This is an unofficial transcript issued for student reference only.</p>
          <p className="mt-0.5">هذه نسخة غير رسمية من السجل الأكاديمي للاطلاع الداخلي للطالب فقط.</p>
        </div>
      </div>
    </div>
  )
}

