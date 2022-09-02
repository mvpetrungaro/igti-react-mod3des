function getToday(): Date {
  return new Date('2021-06-01T00:00:00')
}

export function getCurrentYearMonth(): string {
  const currentYear = getToday().getFullYear().toString()
  const currentMonth = (getToday().getMonth() + 1).toString().padStart(2, '0')

  return `${currentYear}-${currentMonth}`
}

export function getYear(yearMonth: string) {
  return yearMonth.substring(0, 4)
}

export function getMonth(yearMonth: string) {
  return yearMonth.substring(5)
}
