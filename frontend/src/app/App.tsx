import { useEffect, useState } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom'
import { userContext } from './contexts/user.context'
import { User } from './models/user.model'
import { Login } from './pages/Login'

import { Outcomes } from './pages/Outcomes'
import { getUser, logout } from './services/auth.service'
import { getCurrentYearMonth } from './utils/date.utils'

export default function App() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    ;(async () => {
      try {
        const user = await getUser()
        setUser(user)
      } catch (err) {
        setUser(null)
      }
    })()
  }, [])

  function onSignOut() {
    logout()
    setUser(null)
  }

  return (
    <Router>
      <Switch>
        {user ? (
          <userContext.Provider value={{ ...user, logout: onSignOut }}>
            <Route path="/outcomes/:yearMonth">
              <Outcomes />
            </Route>
            <Redirect to={{ pathname: `/outcomes/${getCurrentYearMonth()}` }} />
          </userContext.Provider>
        ) : (
          <>
            <Route path="/login">
              <Login onLogin={setUser} />
            </Route>
            <Redirect to={{ pathname: '/login' }} />
          </>
        )}
      </Switch>
    </Router>
  )
}
