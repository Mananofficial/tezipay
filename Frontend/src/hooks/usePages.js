import { useContext, useEffect } from "react";
import { PagesContext } from "../contexts/pages.context";
import { getPageByKey, updatePageByKey } from "../services/pages.api";

export const usePages = (pageKey) => {
    const { pageData, setPageData, loading, setLoading } = useContext(PagesContext);

    const handleChangePageData = async (pageKey, payload) => {
        setLoading(true);
        try {
            const response = await updatePageByKey(pageKey, payload);
            return { success: true };
        } catch (error) {
            console.error(`Error updating page data for key ${pageKey}:`, error);
            return { success: false, error };
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setPageData(null);
        setLoading(true);

        const fetchPageData = async () => {
            try {
                const data = await getPageByKey(pageKey);
                setPageData(data);
            } catch (error) {
                console.error(`Error fetching page data for key ${pageKey}:`, error);
            } finally {
                setLoading(false);
            }
        };

        fetchPageData();
    }, [pageKey]);

    return { pageData, loading, handleChangePageData };
}