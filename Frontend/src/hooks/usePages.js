import { useContext, useEffect, useState } from "react";
import { PagesContext } from "../contexts/pages.context";
import { getPageByKey } from "../services/pages.api";

export const usePages = (pageKey) => {
    const { pageData, setPageData, loading, setLoading } = useContext(PagesContext);

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

    return { pageData, loading };
}