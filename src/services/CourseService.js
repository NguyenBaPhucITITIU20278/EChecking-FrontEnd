import axios from "axios"

export const axiosJWT = axios.create()
const API_URL = 'https://echecking-backend.onrender.com/api'

export const getAll = async (id, accessToken) => {
    const res = await axiosJWT.get(`${API_URL}/course/getAll/${id}`, {
        headers: {
            token: `Bearer ${accessToken}`,
        }
    })
    return res.data
}


export const getCourseName = async (id) => {
    const res = await axios.get(`${API_URL}/course/getCourseName/${id}`)
    return res.data
}