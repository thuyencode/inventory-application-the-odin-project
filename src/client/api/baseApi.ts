import ky from 'ky'

const baseApi = ky.create({ prefixUrl: 'http://localhost:8080/api' })

export default baseApi
