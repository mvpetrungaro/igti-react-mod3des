import { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Box, Button, Tab, Tabs } from '@material-ui/core'

import { Outcome, getOutcomes } from '../services/outcomes.service'
import Filter from '../components/OutcomesFilter'
import Report from '../components/OutcomesReport'
import Summary from '../components/OutcomesSummary'
import { userContext } from '../contexts/user.context'
import { TabPanel } from '../components/TabPanel'
import OutcomesCategories from '../components/OutcomesCategories'

interface OutcomesParams {
  yearMonth: string
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export function Outcomes() {
  const params = useParams<OutcomesParams>()
  const history = useHistory()
  const user = useContext(userContext)

  const [outcomes, setOutcomes] = useState<Outcome[]>([])
  const [selectedTab, setSelectedTab] = useState(0)

  useEffect(() => {
    ;(async () => {
      setOutcomes(await getOutcomes(params.yearMonth))
    })()
  }, [params])

  function handleYearMonthChange(yearMonth: string) {
    history.push(`${yearMonth}`)
  }

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        margin={2}
      >
        <Box>
          <h1>Outcomes</h1>
        </Box>
        <Box display="flex" alignItems="center">
          <span>{user.nome}</span>
          <Button onClick={user.logout}>Sair</Button>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        margin={2}
      >
        <Filter
          yearMonth={params.yearMonth}
          onYearMonthChange={handleYearMonthChange}
        />
        <Summary values={outcomes.map((o) => o.value)} />
      </Box>

      <Box borderBottom={1} borderColor="divider">
        <Tabs
          centered
          value={selectedTab}
          onChange={(e, v) => setSelectedTab(v)}
          aria-label="basic tabs example"
        >
          <Tab label="Summary" {...a11yProps(0)} />
          <Tab label="Report" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={selectedTab} index={0}>
        <OutcomesCategories outcomes={outcomes} />
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        <Report outcomes={outcomes} />
      </TabPanel>
    </Box>
  )
}
