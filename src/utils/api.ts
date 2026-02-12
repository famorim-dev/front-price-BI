import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const API = axios.create({baseURL: import.meta.env.VITE_API_URL,})

API.interceptors.response.use(
  response => response,
  error => {
    toast.error(error.response?.data?.message)
    return Promise.reject(error)
  }
)

API.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");
    console.log(token)
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error.data.message)
)