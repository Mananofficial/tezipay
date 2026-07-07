import { useContext } from 'react'
import { AdminCustomContext } from '../contexts/adminCustom.context'
import { updateData, uploadImage } from '../services/AdminCustom.api'

export const useAdminCustom = () => {
    const context = useContext(AdminCustomContext);
    const { loading, setLoading, url, setUrl } = context;

    const handleUpdate = async ({ colors, navbar, heroSection, heroBelowSection, blueprint, note, footer }) => {
        setLoading(true);
        try {
            await updateData({ colors, navbar, heroSection, heroBelowSection, blueprint, note, footer });
            console.log("Data updated successfully");
            return { success: true };
        } catch (error) {
            console.error("Error updating data:", error);
            return { success: false, error };
        } finally {
            setLoading(false);
            console.log("Loading state set to false");
        }
    }

    const handleImageUpload = async (file) => {
        setLoading(true);
        try {
            const response = await uploadImage(file);
            return {
                success: true,
                url: response.url
            };
        } catch (error) {
            console.error("Error uploading image:", error);
            return { success: false, error };
        } finally {
            setLoading(false);
        }
    }

    return { loading, setLoading, handleUpdate, handleImageUpload };
}   