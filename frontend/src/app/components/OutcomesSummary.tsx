import { Box } from '@material-ui/core'
import { formatCurrency } from '../utils/number.utils'

interface SummaryProps {
  values: number[]
}

export default function OutcomesSummary({ values }: SummaryProps) {
  return (
    <Box>
      <Box component="span">Despesa total: </Box>
      <Box component="span" fontWeight="bold">
        {formatCurrency(values.reduce((a, c) => a + c, 0))}
      </Box>
    </Box>
  )
}
