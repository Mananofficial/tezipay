import { useContext, useEffect } from "react";
import { HomepageContext } from "../contexts/homepage.context";
import { getHomepageData } from "../services/homepage.api";

export const useHomepage = () => {
    const context = useContext(HomepageContext);
    const { homepageData, loading } = context;

    if(!context) {
        throw new Error("useHomepage must be used within a HomepageProvider");
    }

    return { homepageData, loading };
}
