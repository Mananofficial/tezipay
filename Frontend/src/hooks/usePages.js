import { useContext, useEffect, useState } from "react";
import { PagesContext } from "../contexts/pages.context";
import { getPageByKey, updatePageByKey } from "../services/pages.api";

export const usePages = (pageKey) => {
    const { pageData, setPageData, loading, setLoading } = useContext(PagesContext);

    const handleChangePageData = async (pageKey) => {
        setLoading(true);
        try {
            await updatePageByKey(pageKey, payload);
            return { success: true };
        } catch (error) {
            console.error(`Error updating page data for key ${pageKey}:`, error);
            const data = error.response?.data;
            const message = data?.error || data?.message || 'Something went wrong. Please try again.';
            const errors = data?.errors || [];
            return { success: false, message, errors };
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const fetchPageData = async () => {
            setLoading(true);
            try {
                const data = await getPageByKey(pageKey);
                setPageData(data);
                return { success: true };
            } catch (error) {
                console.error(`Error fetching page data for key ${pageKey}:`, error);
                throw error;
                return { success: false };
            } finally {
                setLoading(false);
            }
        };
        fetchPageData();
    }, [pageKey]);

    return { pageData, loading, handleChangePageData };
}