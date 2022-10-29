import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

axios.defaults.timeout = 30000

axios.interceptors.request.use(config => {
    console.log(config);
})

export default axios