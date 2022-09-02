export interface Year {
  id: number
  code: string
  name: string
}

export interface Month {
  id: number
  code: string
  name: string
}

export function getYears(): Year[] {
  return [
    { id: 2021, code: '2021', name: '2021' } as Year,
    { id: 2020, code: '2020', name: '2020' } as Year,
  ]
}

export function getMonths(): Month[] {
  return [
    { id: 1, code: '01', name: 'January' } as Month,
    { id: 2, code: '02', name: 'February' } as Month,
    { id: 3, code: '03', name: 'March' } as Month,
    { id: 4, code: '04', name: 'April' } as Month,
    { id: 5, code: '05', name: 'May' } as Month,
    { id: 6, code: '06', name: 'June' } as Month,
    { id: 7, code: '07', name: 'July' } as Month,
    { id: 8, code: '08', name: 'August' } as Month,
    { id: 9, code: '09', name: 'September' } as Month,
    { id: 10, code: '10', name: 'October' } as Month,
    { id: 11, code: '11', name: 'November' } as Month,
    { id: 12, code: '12', name: 'December' } as Month,
  ]
}
