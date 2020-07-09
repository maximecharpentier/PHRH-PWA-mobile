import axios from 'axios';
import { AsyncStorage } from "react-native";

// axios.defaults.headers.common.Authorization = await AsyncStorage.getItem('userToken');
const API = axios.create({
  baseURL: 'http://15.236.20.198:3000/',
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
