export const GRADE_POINTS: Record<string, number> = {
  'A+': 4.0,
  'A': 3.8,
  'A-': 3.5,
  'B+': 3.2,
  'B': 2.9,
  'B-': 2.6,
  'C+': 2.3,
  'C': 2.0,
  'C-': 1.7,
  'D+': 1.4,
  'D': 1.2,
  'D-': 1.0,
  'F': 0.0,
  'FW': 0.0,
}

export function getGradePoint(grade: string): number {
  return GRADE_POINTS[grade] ?? 0.0
}

export interface GradeRow {
  course: string
  title: string
  titleAr: string
  credits: number
  qualityPoints: number
  projectedGrade: string
  finalGrade: string
  status: string
  result: string
}

export interface TermRecord {
  term: string
  termAr?: string
  courses: GradeRow[]
  termGpa: number
  termCredits: number
  termAttempted: number
  termEarned: number
  termQualityPoints: number
  awards?: string[]
}

export interface RawGradeRow {
  course: string
  title: string
  titleAr: string
  credits: number
  projectedGrade: string
  finalGrade: string
  status: string
  result: string
}

export function calculateGradeRow(raw: RawGradeRow): GradeRow {
  const points = getGradePoint(raw.finalGrade)
  const qualityPoints = Number((raw.credits * points).toFixed(2))
  return {
    ...raw,
    qualityPoints,
  }
}

export function calculateTotals(rows: GradeRow[]) {
  const totalAttempted = rows.reduce((sum, r) => sum + r.credits, 0)
  const totalPassed = rows
    .filter((r) => r.result === 'Pass' && r.finalGrade !== 'F' && r.finalGrade !== 'FW')
    .reduce((sum, r) => sum + r.credits, 0)
  const totalQualityPoints = rows.reduce((sum, r) => sum + r.qualityPoints, 0)
  const gpa = totalAttempted > 0 ? Number((totalQualityPoints / totalAttempted).toFixed(2)) : 0.0

  return {
    totalCredits: totalAttempted,
    totalAttempted,
    totalPassed,
    totalQualityPoints: Number(totalQualityPoints.toFixed(2)),
    gpa,
  }
}

export const rawGradeReportRows: RawGradeRow[] = [
  {
    course: 'MD202',
    title: 'Anatomy & Histology',
    titleAr: 'تشريح وعلم الأنسجة',
    credits: 3.0,
    projectedGrade: 'C',
    finalGrade: 'C',
    status: 'Active',
    result: 'Pass',
  },
  {
    course: 'PC102',
    title: 'Pharmaceutical Organic Chemistry I',
    titleAr: 'كيمياء عضوية صيدلية 1',
    credits: 3.0,
    projectedGrade: 'B',
    finalGrade: 'B',
    status: 'Active',
    result: 'Pass',
  },
  {
    course: 'PT202',
    title: 'Physical Pharmacy',
    titleAr: 'صيدلة فيزيائية',
    credits: 2.0,
    projectedGrade: 'C',
    finalGrade: 'C',
    status: 'Active',
    result: 'Pass',
  },
  {
    course: 'MD203',
    title: 'Psychology',
    titleAr: 'علم النفس السلوكي',
    credits: 4.0,
    projectedGrade: 'D',
    finalGrade: 'D',
    status: 'Active',
    result: 'Pass',
  },
  {
    course: 'PB201',
    title: 'Cell Biology',
    titleAr: 'بيولوجيا الخلية',
    credits: 4.0,
    projectedGrade: 'D+',
    finalGrade: 'D+',
    status: 'Active',
    result: 'Pass',
  },
  {
    course: 'PC101',
    title: 'Pharmaceutical Analytical Chemistry I',
    titleAr: 'كيمياء تحليلية صيدلية 1',
    credits: 1.0,
    projectedGrade: 'B',
    finalGrade: 'B',
    status: 'Active',
    result: 'Pass',
  },
  {
    course: 'PG101',
    title: 'Medicinal Plants',
    titleAr: 'عقاقير ونباتات طبية',
    credits: 3.0,
    projectedGrade: 'C',
    finalGrade: 'C',
    status: 'Active',
    result: 'Pass',
  },
]

export const gradeReportRows: GradeRow[] = rawGradeReportRows.map(calculateGradeRow)

export const termTotals = calculateTotals(gradeReportRows)

export const transcriptTerms: TermRecord[] = [
  {
    term: '2025/2026 Spring',
    termAr: '2025/2026 - الفصل الدراسي الثاني (الربيعي)',
    courses: gradeReportRows,
    termGpa: termTotals.gpa,
    termCredits: termTotals.totalCredits,
    termAttempted: termTotals.totalAttempted,
    termEarned: termTotals.totalPassed,
    termQualityPoints: termTotals.totalQualityPoints,
    awards: [],
  },
]

