import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true,
});

export async function adminLogin({ email, password }) {
    try {
        const response = await api.post('/admin/login', { email, password });
        return response.data;
    } catch (error) {
        console.error('Error during admin login:', error);
        throw error;
    }
}

export async function adminLogout( ){
    try {
        const response = await api.post('/admin/logout')
        return response.data;
    } catch (err) {
        console.error("Error during admin logout:", err);
        throw err;
    }
}

export async function getAdmin() {
    try {
        const response = await api.get('/admin/get-me');
        return response.data;
    } catch (error) {
        console.error('Error fetching admin data:', error);
        throw error;
    }
}