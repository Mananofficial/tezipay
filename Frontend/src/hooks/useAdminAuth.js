import { useContext, useEffect } from "react";
import { AdminAuthContext } from "../contexts/adminAuth.context";
import { adminLogin, adminLogout, getAdmin } from "../services/AdminAuth.api";
import Swal from "sweetalert2";

export const useAdminAuth = () => {
    const context = useContext(AdminAuthContext);
    const { admin, setAdmin, loading, setLoading } = context;

    const handleAdminLogin = async ({ email, password }) => {
        setLoading(true);
        try {
            const response = await adminLogin({ email, password });
            setAdmin(response.admin);
            return { success: true };
        } catch (error) {
            console.error('Error logging in admin:', error);

            const data = error.response?.data;
            const message = data?.error || data?.message || 'Something went wrong. Please try again.';
            const errors = data?.errors || [];

            return { success: false, message, errors };
        } finally {
            setLoading(false);
        }
    }

    const handleAdminLogout = async () => {
        setLoading(true);
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "You will be logged out of your account.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, Logout",
                cancelButtonText: "Cancel",
                confirmButtonColor: "#ef4444",
                cancelButtonColor: "#6b7280",
                reverseButtons: true,
                focusCancel: true,
            });

            if (!result.isConfirmed) {
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