import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'

import { Outcome } from '../services/outcomes.service'
import { groupBy } from '../utils/array.utils'
import { formatCurrency } from '../utils/number.utils'

interface ReportProps {
  outcomes: Outcome[]
}

interface OutcomesGroupedByCategory {
  key: string
  values: Outcome[]
}

export default function OutcomesCategories(props: ReportProps) {
  const outcomesGroupedByCategories = groupBy(
    props.outcomes,
    'category'
  ) as OutcomesGroupedByCategory[]

  const categories = outcomesGroupedByCategories
    .map((g, i) => ({
      id: i,
      name: g.key,
      value: g.values.reduce((a, v) => a + v.value, 0),
    }))
    .sort((a, b) => b.value - a.value)

  return (
    <TableContainer component="div">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{category.name}</TableCell>
              <TableCell align="right">
                {formatCurrency(category.value)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
