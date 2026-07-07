import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true,
});

export const getHomepageData = async () => {
    try {
        const response = await api.get(`/homepage/`);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching homepage data:', error);
        throw error;
    }
}