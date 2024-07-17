import axios from 'axios'

const serverAPI = axios.create({
    baseURL: 'https://localhost:3000'
});

export default serverAPI