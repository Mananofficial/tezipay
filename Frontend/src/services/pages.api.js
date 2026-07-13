import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true,
})

export const getPageByKey = async (pageKey) => {
    try {
        const response = await api.get(`/pages/${pageKey}`);
        return response.data.data;
    } catch (error) {
        console.error(`Error fetching page with key ${pageKey}:`, error);
        throw error;
    }
}

export const updatePageByKey = async (pageKey, payload) => {
    try {
        const response = await api.patch(`/pages/${pageKey}`, payload);
        return response.data.data;
    } catch (error) {
        console.error(`Error updating page with key ${pageKey}:`, error);
        throw error;
    }
}