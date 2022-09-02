import {
  Box,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from '@material-ui/core'

import { getMonths, getYears } from '../services/dates.service'
import { getMonth, getYear } from '../utils/date.utils'

interface FilterProps {
  yearMonth: string
  onYearMonthChange: (yearMonth: string) => void
}

const years = getYears()
const months = getMonths()

const useStyles = makeStyles({
  select: {
    minWidth: 200,
  },
})

export default function OutcomesFilter({
  yearMonth,
  onYearMonthChange,
}: FilterProps) {
  const classes = useStyles()

  const selectedYear = getYear(yearMonth)
  const selectedMonth = getMonth(yearMonth)

  function handleYearChange(year: string) {
    if (onYearMonthChange) {
      onYearMonthChange(`${year}-${selectedMonth}`)
    }
  }

  function handleMonthChange(month: string) {
    if (onYearMonthChange) {
      onYearMonthChange(`${selectedYear}-${month}`)
    }
  }

  return (
    <Box display="flex" alignItems="center">
      <Box marginX={2} minWidth={200}>
        <FormControl className={classes.select}>
          <InputLabel id="select-year-label">Year</InputLabel>
          <Select
            labelId="select-year-label"
            id="select-year"
            value={selectedYear}
            onChange={(e) => handleYearChange(e.target.value as string)}
            fullWidth={true}
          >
            {years.map((year) => (
              <MenuItem key={year.id} value={year.code}>
                {year.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box marginX={2}>
        <FormControl className={classes.select}>
          <InputLabel id="select-month-label">Month</InputLabel>
          <Select
            labelId="select-month-label"
            id="select-month"
            value={selectedMonth}
            onChange={(e) => handleMonthChange(e.target.value as string)}
            fullWidth={true}
          >
            {months.map((month) => (
              <MenuItem key={month.id} value={month.code}>
                {month.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  )
}
