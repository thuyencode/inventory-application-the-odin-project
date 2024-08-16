import { PORT } from '@/shared/constants'
import ky from 'ky'

const baseApi = ky.create({ prefixUrl: `http://localhost:${PORT}/api` })

export default baseApi
