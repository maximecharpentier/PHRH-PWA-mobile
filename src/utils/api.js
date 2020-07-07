import axios from 'axios';

const API = axios.create({
    baseURL: 'http://52.47.86.14:3001/',
    headers: {
        'Content-Type': 'application/json',
    },
});


export { API };
