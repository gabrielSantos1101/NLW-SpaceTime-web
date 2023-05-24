import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://nlw-spacetime-server-production.up.railway.app',
})
