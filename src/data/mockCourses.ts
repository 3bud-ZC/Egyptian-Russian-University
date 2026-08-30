export interface Course {
  code: string
  title: string
  credits: number
  days: string[]
  startTime: string
  endTime: string
  location: string
  instructor: string
  color: string
}

const palette = [
  'bg-blue-100 border-blue-300 text-blue-800',
  'bg-green-100 border-green-300 text-green-800',
  'bg-purple-100 border-purple-300 text-purple-800',
  'bg-orange-100 border-orange-300 text-orange-800',
  'bg-teal-100 border-teal-300 text-teal-800',
  'bg-rose-100 border-rose-300 text-rose-800',
  'bg-indigo-100 border-indigo-300 text-indigo-800',
]

export const mockCourses: Course[] = [
  {
    code: 'MD202',
    title: 'Anatomy & Histology',
    credits: 3,
    days: ['Sunday', 'Tuesday'],
    startTime: '9:00 AM',
    endTime: '10:30 AM',
    location: 'Pharmacy Building - Hall 1',
    instructor: 'Dr. Tarek Mostafa',
    color: palette[0],
  },
  {
    code: 'PC102',
    title: 'Pharmaceutical Organic Chemistry I',
    credits: 3,
    days: ['Wednesday', 'Saturday'],
    startTime: '9:00 AM',
    endTime: '10:30 AM',
    location: 'Pharmacy Building - Hall 3',
    instructor: 'Dr. Rania Sobhy',
    color: palette[4],
  },
  {
    code: 'PT202',
    title: 'Physical Pharmacy',
    credits: 2,
    days: ['Tuesday', 'Thursday'],
    startTime: '12:00 PM',
    endTime: '1:30 PM',
    location: 'Pharmacy Building - Lab 5',
    instructor: 'Dr. Mona Galal',
    color: palette[6],
  },
  {
    code: 'MD203',
    title: 'Psychology',
    credits: 4,
    days: ['Monday', 'Wednesday'],
    startTime: '10:00 AM',
    endTime: '11:30 AM',
    location: 'Pharmacy Building - Hall 2',
    instructor: 'Dr. Sarah El Sayed',
    color: palette[1],
  },
  {
    code: 'PB201',
    title: 'Cell Biology',
    credits: 4,
    days: ['Sunday', 'Tuesday'],
    startTime: '11:00 AM',
    endTime: '12:30 PM',
    location: 'Pharmacy Building - Lab 3',
    instructor: 'Dr. Hossam Fahmy',
    color: palette[2],
  },
  {
    code: 'PC101',
    title: 'Pharmaceutical Analytical Chemistry I',
    credits: 1,
    days: ['Monday', 'Wednesday'],
    startTime: '1:00 PM',
    endTime: '2:30 PM',
    location: 'Pharmacy Building - Lab 4',
    instructor: 'Dr. Ahmed Abdelsamea',
    color: palette[3],
  },
  {
    code: 'PG101',
    title: 'Medicinal Plants',
    credits: 3,
    days: ['Sunday', 'Thursday'],
    startTime: '2:00 PM',
    endTime: '3:30 PM',
    location: 'Pharmacy Building - Hall 4',
    instructor: 'Dr. Khaled Hassan',
    color: palette[5],
  },
]

export const periodOptions = ['2025/2026 - Spring', '2025/2026 - Fall', '2024/2025 - Spring', '2024/2025 - Fall']
