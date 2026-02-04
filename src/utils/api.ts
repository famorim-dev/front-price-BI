import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const API = axios.create(import.meta.env.URL_API)

API.interceptors.response.use(
  response => response,
  error => {
    const message = error.response?.data?.message
    toast.error(message)
    return Promise.reject(error)
  }
)