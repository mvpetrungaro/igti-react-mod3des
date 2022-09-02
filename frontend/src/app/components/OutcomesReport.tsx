import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'

import { Outcome } from '../services/outcomes.service'
import { formatCurrency } from '../utils/number.utils'

interface ReportProps {
  outcomes: Outcome[]
}

export default function OutcomesReport(props: ReportProps) {
  return (
    <TableContainer component="div">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Day</TableCell>
            <TableCell align="right">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.outcomes.map((outcome) => (
            <TableRow key={outcome.id}>
              <TableCell>{outcome.description}</TableCell>
              <TableCell align="right">{outcome.category}</TableCell>
              <TableCell align="right">{outcome.day}</TableCell>
              <TableCell align="right">
                {formatCurrency(outcome.value)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
