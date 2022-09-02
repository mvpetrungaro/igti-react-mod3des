import { createContext } from 'react'
import { User } from '../models/user'

export const userContext = createContext<User & { logout: () => void }>({
  email: '',
  nome: '',
  logout: () => {},
})
