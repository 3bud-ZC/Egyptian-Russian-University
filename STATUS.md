# ERU Student Portal - Status

## Project Overview

A responsive web portal for the Egyptian Russian University (ERU) student self-service system. Configured for student academic record reference matching the traditional ERU / UMIS portal appearance.

## Tech Stack

- **Framework:** React 18 + Vite 5
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Utilities:** clsx, tailwind-merge

## Completed Pages / Routes

| Route | Page | Status |
|-------|------|--------|
| `/login` | Login | Complete |
| `/dashboard` | Today's Overview | Complete |
| `/registration/schedule` | My Schedule | Complete |
| `/grades/report` | Grade Report | Complete |
| `/grades/transcript` | Academic Transcript | Complete |
| `/finances/balance` | Balance | Complete |

The default route (`/`) redirects to `/login`.

## Academic Records & Courses (3 Distinct Courses)

All academic metrics (Credits, Quality Points, Term GPA, and CGPA) are dynamically calculated from the single source of truth:

- `PC202` — Pharmaceutical Organic Chemistry II — 3.00 CH — C (Active, Pass)
- `PC201` — Pharmaceutical Analytical Chemistry II — 1.00 CH — D+ (Active, Pass)
- `PT202` — Physical Pharmacy — 2.00 CH — C (Active, Pass)

### Academic Totals:
- **Total Attempted Credits:** 6.00
- **Total Passed Credits:** 6.00
- **Calculated Term GPA:** 1.90
- **Calculated CGPA:** 1.90

## Current Status

- Dynamic GPA & Quality Points calculation engine implemented and tested.
- Traditional ERU / UMIS university portal visual styling applied across all pages.
- Official student academic portal styling without demo credentials or unofficial disclaimers.
- Header with top student data bar and dark gray navigation strip with ERU green accent.
- Verified all responsive breakpoints (375px, 430px, 768px, 1366px, 1920px).
- Production deployment live on Vercel (`https://egyptian-russian-university.vercel.app`).
- TypeScript compilation (`tsc`) and Vite production build pass cleanly.
- ESLint passes with 0 warnings and 0 errors.

---

Last updated: 2026-08-30



