import axios from "axios"

export const axiosJWT = axios.create()

export const loginUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/student/signin`, data)
    return res.data
}

export const getDetailStudent = async (id, accessToken) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/student/getDetails/${id}`, {
        headers: {
            token: `Bearer ${accessToken}`,
        }
    })
    return res.data
}