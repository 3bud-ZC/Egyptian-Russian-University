import { gradeReportRows, calculateTotals } from './mockGrades'

export const mockStudent = {
  name: 'Tasnem',
  fullName: 'Tasnem Mohamed Rafat Ahmed Mohamed',
  fullNameAr: 'تسنيم محمد رفعت احمد محمد',
  email: '256323@eru.edu.eg',
  university: 'Egyptian Russian University',
  universityAr: 'الجامعة المصرية الروسية',
  faculty: 'Faculty of Clinical Pharmacy',
  facultyAr: 'كلية الصيدلة الإكلينيكية',
  program: 'Clinical Pharmacy',
  programAr: 'صيدلة إكلينيكية',
  degree: 'Bachelor of Pharmacy (Pharm D)',
  degreeAr: 'بكالوريوس الصيدلة الإكلينيكية',
  curriculum: 'Pharm D - Clinical Pharmacy',
  year: 'Year One',
  yearAr: 'المستوى الأول',
  studentId: '256323',
  nationalId: '30501010102588',
  period: '2025/2026 - Spring',
  academicYear: '2025/2026',
  semester: 'Spring',
  semesterAr: 'الربيعي',
  advisor: 'Dr. Ahmed Abdelsamea',
  advisorAr: 'د. أحمد عبد السميع',
  gpa: {
    get term() {
      return calculateTotals(gradeReportRows).gpa
    },
    get overall() {
      return calculateTotals(gradeReportRows).gpa
    },
  },
  get passedCredits() {
    return calculateTotals(gradeReportRows).totalPassed
  },
  get attemptedCredits() {
    return calculateTotals(gradeReportRows).totalAttempted
  },
  get qualityPoints() {
    return calculateTotals(gradeReportRows).totalQualityPoints
  },
  degreeAwarded: 'Not yet granted',
  dateGranted: 'Not yet granted',
  address: 'Cairo, Arab Republic of Egypt',
}

export type Student = typeof mockStudent

