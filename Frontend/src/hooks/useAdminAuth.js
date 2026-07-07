import { useContext, useEffect } from "react";
import { AdminAuthContext } from "../contexts/adminAuth.context";
import { adminLogin, adminLogout, getAdmin } from "../services/AdminAuth.api";

export const useAdminAuth = () => {
    const context = useContext(AdminAuthContext);
    const { admin, setAdmin, loading, setLoading } = context;

    const handleAdminLogin = async ({ email, password }) => {
        setLoading(true);
        try {
            const response = await adminLogin({ email, password });
            setAdmin(response.admin);
            return true;
        } catch (error) {
            console.error('Error logging in admin:', error);
            return false;
        } finally {
            setLoading(false);
        }
    }

    const handleAdminLogout = async () => {
        setLoading(true);
        try {
            const confirmed = window.confirm("Are you sure you want to logout?");
            if (!confirmed) {
                setLoading(false);
                return;
            }
            await adminLogout();
            setAdmin(null);
        } catch (error) {
            console.error('Error logging out admin:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const getAndSetAdmin = async () => {
            try {
                const data = await getAdmin();
                setAdmin(data.admin);
            } catch (error) {
                setAdmin(null);
            } finally {
                setLoading(false);
            }
        };

        getAndSetAdmin();
    }, []);

    return { admin, setAdmin, loading, setLoading, handleAdminLogin, handleAdminLogout };
}