import { useState } from 'react'
import { AppShell } from '@/components/layout/AppShell'
import { Card } from '@/components/ui/Card'
import { SelectBox } from '@/components/ui/SelectBox'
import { PageHeader } from '@/components/ui/PageHeader'
import { balanceSummary } from '@/data/mockFinances'
import { periodOptions } from '@/data/mockCourses'

const radioOptions = [
  { label: 'Detail by Charges / Credits', value: 'charges' },
  { label: 'Detail by Summary Type', value: 'summary' },
  { label: 'Balance Summary', value: 'balance' },
]

export default function BalancePage() {
  const [period, setPeriod] = useState('2025/2026 - Spring')
  const [view, setView] = useState('balance')

  return (
    <AppShell>
      <div className="space-y-4 max-w-6xl mx-auto">
        <PageHeader title="Balance / الرصيد والمصروفات" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="lg:col-span-2">
            <h2 className="text-sm sm:text-base font-bold text-slate-900 mb-2">Balance Due By Term / الرصيد المستحق للفصل الدراسي</h2>
            <p className="text-xs text-slate-600 mb-4">
              Summary of tuition fees, discounts, and payments for {period}.
            </p>

            <div className="bg-[#f8fafc] border border-slate-300 p-3 sm:p-4 flex items-center justify-between mb-4">
              <span className="text-xs sm:text-sm font-bold text-slate-900">Total Outstanding Balance / الرصيد المتبقي</span>
              <span className="text-xl sm:text-2xl font-extrabold text-slate-950">
                {balanceSummary.total.toFixed(2)} EGP / ج.م
              </span>
            </div>

            <div className="overflow-x-auto border border-slate-300">
              <table className="w-full text-xs sm:text-sm">
                <tbody>
                  <tr className="border-b border-slate-300 bg-white">
                    <td className="py-2.5 px-3 border-r border-slate-300 font-medium text-slate-800">Tuition / الرسوم الدراسية الأساسية</td>
                    <td className="py-2.5 px-3 text-right font-bold text-slate-900">{balanceSummary.tuition.toFixed(2)} ج.م</td>
                  </tr>
                  <tr className="border-b border-slate-300 bg-slate-50">
                    <td className="py-2.5 px-3 border-r border-slate-300 font-medium text-slate-800">Extra Repeat / إعادة مقررات</td>
                    <td className="py-2.5 px-3 text-right font-bold text-slate-900">{balanceSummary.extraRepeat.toFixed(2)} ج.م</td>
                  </tr>
                  <tr className="border-b border-slate-300 bg-white">
                    <td className="py-2.5 px-3 border-r border-slate-300 font-medium text-emerald-800">Scholarship & Discount / المنحة والخصم</td>
                    <td className="py-2.5 px-3 text-right font-bold text-emerald-800">−{balanceSummary.discount.toFixed(2)} ج.م</td>
                  </tr>
                  <tr className="border-b border-slate-300 bg-slate-50">
                    <td className="py-2.5 px-3 border-r border-slate-300 font-medium text-blue-800">Paid Amounts / المسدد</td>
                    <td className="py-2.5 px-3 text-right font-bold text-blue-800">−{balanceSummary.payment.toFixed(2)} ج.م</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-2.5 px-3 border-r border-slate-300 font-medium text-slate-800">Student Activities / الأنشطة الطلابية</td>
                    <td className="py-2.5 px-3 text-right font-bold text-slate-900">{balanceSummary.activities.toFixed(2)} ج.م</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <Card>
            <h2 className="text-sm sm:text-base font-bold text-slate-900 mb-3">Filter Options / خيارات العرض</h2>
            <div className="mb-4">
              <label className="block text-xs font-semibold text-slate-700 mb-1">Period / الفصل الدراسي</label>
              <SelectBox value={period} options={periodOptions} onChange={setPeriod} className="w-full" />
            </div>
            <div className="space-y-2 text-xs">
              {radioOptions.map((opt) => (
                <label key={opt.value} className="flex items-center gap-2 text-slate-800 cursor-pointer p-2 border border-slate-200 hover:bg-slate-50">
                  <input
                    type="radio"
                    name="balance-view"
                    value={opt.value}
                    checked={view === opt.value}
                    onChange={() => setView(opt.value)}
                    className="accent-[#1b7e42]"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  )
}
