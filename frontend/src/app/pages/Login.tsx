import { Box, Button, Container, TextField } from '@material-ui/core'
import { FormEvent, useState } from 'react'
import { User } from '../models/user'
import { login } from '../services/auth.service'

interface LoginProps {
  onLogin: (user: User) => void
}

export function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  async function signIn(e: FormEvent) {
    e.preventDefault()

    if (!email.trim() || !password.trim()) {
      setError('All fields are required')
      return
    }

    try {
      onLogin(await login(email, password))
      setError('')
    } catch (err) {
      setError('Wrong credentials')
    }
  }

  return (
    <Box marginTop={10}>
      <Container maxWidth="sm">
        <h2 style={{ margin: '20px 5px' }}>Sign-in</h2>

        {error && <div style={{ margin: 5, color: 'red' }}>{error}</div>}

        <form onSubmit={signIn}>
          <TextField
            id="email"
            label="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            fullWidth={true}
            style={{ margin: 5 }}
          />
          <TextField
            id="password"
            label="Passowrd"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            fullWidth={true}
            type="password"
            style={{ margin: 5 }}
          />
          <Box textAlign="right" style={{ margin: 5 }}>
            <Button variant="contained" onClick={signIn} color="primary">
              LOGIN
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  )
}
