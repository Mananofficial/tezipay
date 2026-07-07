import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true,
});

export async function updateData({ colors, navbar, heroSection, heroBelowSection, blueprint, note, footer }) { 
    try {
        const response = await api.patch(`/admin/homepage/`, { colors, navbar, heroSection, heroBelowSection, blueprint, note, footer });
        return response.data.data;
    } catch (error) {
        console.error("Error updating data:", error);
        throw error; 
    }
}

export async function uploadImage(file) {
    const formData = new FormData();
    formData.append('image', file);
    try {
        const response = await api.post('/admin/upload-image/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
}