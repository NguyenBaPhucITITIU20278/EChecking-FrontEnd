import axios from "axios"

export const axiosJWT = axios.create()

export const loginStudent = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/student/signin`, data)
    return res.data
}