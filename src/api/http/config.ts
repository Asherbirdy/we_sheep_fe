import { config } from '@/config'
const isDev = import.meta.env.MODE === 'development'
const baseUrl = isDev ? config.env.apiUrl : `${window.location.origin}/api/v1`

export default { baseUrl }