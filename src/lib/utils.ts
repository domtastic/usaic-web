import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Sanity's `date` field type stores a plain "YYYY-MM-DD" string with no time
// or timezone component. `new Date("2026-10-02")` parses that as UTC
// midnight, which then renders as the previous day for anyone in a US
// timezone. Parsing the parts directly builds the Date in local time
// instead, so the calendar date always matches what's in Studio.
export function parseLocalDate(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number)
  return new Date(year, month - 1, day)
}