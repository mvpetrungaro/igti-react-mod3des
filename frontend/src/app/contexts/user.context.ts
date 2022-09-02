import { createContext } from 'react'
import { User } from '../models/user.model'

export const userContext = createContext<User & { logout: () => void }>({
  email: '',
  nome: '',
  logout: () => { },
})
