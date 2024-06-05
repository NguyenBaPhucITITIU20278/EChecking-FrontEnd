import axios from "axios"

export const axiosJWT = axios.create()
const API_URL = 'https://echecking-backend.onrender.com/api'

export const getDetailsByCode = async (code) => {
    const res = await axiosJWT.get(`${API_URL}/attendance/getDetailsByCode/${code}`)
    return res.data
}