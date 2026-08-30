import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'

export default function LoginPage() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if ((username === '256323@eru.edu.eg' || username === '256323' || username === 'tasnem') && password === '1234') {
      setError('')
      navigate('/dashboard')
    } else {
      setError('Invalid student email/ID or password.')
    }
  }

  return (
    <AppShell variant="login" pageLabel="ADMISSIONS & REGISTRATION" hideFooter>
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-none shadow-none border border-slate-300 p-6 sm:p-8">
            <div className="flex flex-col items-center mb-6 border-b border-slate-200 pb-5">
              <img
                src="/eru-logo.png"
                alt="Egyptian Russian University"
                className="h-16 w-auto object-contain mb-3"
              />
              <h2 className="text-base font-bold text-slate-900 text-center">
                Student Self-Service Portal
              </h2>
              <p className="text-xs text-slate-600 text-center mt-0.5">
                بوابة الخدمات الطلابية الإلكترونية — الجامعة المصرية الروسية
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-xs font-bold text-slate-700 mb-1">
                  Student Email / ID (البريد الجامعي أو الرقم)
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value)
                    setError('')
                  }}
                  placeholder="256323@eru.edu.eg"
                  className="w-full border border-slate-300 rounded-none px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#1b7e42] bg-[#f8fafc]"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-xs font-bold text-slate-700 mb-1">
                  Password (كلمة المرور)
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setError('')
                  }}
                  placeholder="Enter your password"
                  className="w-full border border-slate-300 rounded-none px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-[#1b7e42] bg-[#f8fafc]"
                />
              </div>
              {error && (
                <div className="text-xs text-red-700 bg-red-50 border border-red-200 p-2.5">
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-[#2d3748] hover:bg-[#1b7e42] text-white font-bold py-2.5 rounded-none transition text-xs sm:text-sm uppercase tracking-wider"
              >
                Sign In / تسجيل الدخول
              </button>
            </form>
          </div>

          <div className="mt-4 text-center text-xs text-slate-500">
            <p>Egyptian Russian University © {new Date().getFullYear()} — All rights reserved.</p>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
