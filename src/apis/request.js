import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

axios.defaults.timeout = 30000


export default axios