import { User } from '../models/user.model'

const URL = process.env.REACT_APP_API_URL + '/sessao'

export async function getUser(): Promise<User> {
  const res = await fetch(`${URL}/usuario`, {
    credentials: 'include',
  })

  if (!res.ok) {
    // eslint-disable-next-line no-throw-literal
    throw { status: res.status, message: res.statusText }
  }

  return await res.json()
}

export async function login(email: string, password: string): Promise<User> {
  const res = await fetch(`${URL}/criar`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({ email, senha: password }),
  })

  if (!res.ok) {
    // eslint-disable-next-line no-throw-literal
    throw { status: res.status, message: res.statusText }
  }

  return await res.json()
}

export async function logout(): Promise<void> {
  const res = await fetch(`${URL}/finalizar`, {
    method: 'POST',
    credentials: 'include',
  })

  if (!res.ok) {
    // eslint-disable-next-line no-throw-literal
    throw { status: res.status, message: res.statusText }
  }
}
