import { createContext, useState, useEffect } from "react";
import { getHomepageData } from "../services/homepage.api";

export const HomepageContext = createContext();

export const HomepageProvider = ({ children }) => {
    const [homepageData, setHomepageData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHomepageData = async () => {
            setLoading(true);
            try {
                const data = await getHomepageData();
                setHomepageData(data);
            } catch (error) {
                console.error('Error fetching homepage data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchHomepageData();
    }, []);

    useEffect(() => {
        if (!homepageData?.colors) return;

        const root = document.documentElement;

        root.style.setProperty("--primary", homepageData.colors.primary);
        root.style.setProperty("--secondary", homepageData.colors.secondary);
        root.style.setProperty("--primaryBackground", homepageData.colors.primaryBackground);
        root.style.setProperty("--secondaryBackground", homepageData.colors.secondaryBackground);
        root.style.setProperty("--primaryForeground", homepageData.colors.primaryForeground);
        root.style.setProperty("--secondaryForeground", homepageData.colors.secondaryForeground);
    }, [homepageData]);

    return (
        <HomepageContext.Provider value={{ homepageData, loading }}>
            {children}
        </HomepageContext.Provider>
    );
};