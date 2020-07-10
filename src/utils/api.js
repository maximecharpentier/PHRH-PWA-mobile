import axios from 'axios';
import { AsyncStorage } from "react-native";

const API = axios.create({
  baseURL: 'http://localhost:3001/',
    headers: {
        'Content-Type': 'application/json',
    },
});

API.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem('userToken')
        if (token) {
            config.headers.Authorization = token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
);


export { API };
