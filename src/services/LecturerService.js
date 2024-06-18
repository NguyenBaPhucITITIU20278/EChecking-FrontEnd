import axios from "axios"

export const axiosJWT = axios.create()
const API_URL = 'http://localhost:3001/api'


export const loginUser = async (data) => {
    const res = await axios.post(`${API_URL}/lecturer/signin`, data)
    return res.data
}

export const getDetailLecturer = async (id, accessToken) => {
    const res = await axios.get(`${API_URL}/lecturer/getDetails/${id}`, {
        headers: {
            token: `Bearer ${accessToken}`,
        }
    })
    return res.data
}

export const getAllLecturers = async () => {
    const res = await axios.get(`${API_URL}/lecturer/getAll`)
    return res.data
}


export const updateLecturer = async (lecturerId, data, accessToken) => {
    if (!accessToken) {
        throw new Error("Access token is undefined");
    }
    try {
        const res = await axios.put(`${API_URL}/lecturer/update/${lecturerId}`, data, {
            headers: {
                token: `Bearer ${accessToken}`,
            }
        });
        return res.data;
    } catch (error) {
        console.error("Failed to update lecturer:", error);
        throw error;
    }
}