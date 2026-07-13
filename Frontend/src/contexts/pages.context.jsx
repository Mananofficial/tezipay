import { createContext, useContext, useState } from "react";

export const PagesContext = createContext();

export const PagesProvider = ({ children }) => {
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(false);

    return (
        <PagesContext.Provider value={{ pageData, setPageData, loading, setLoading }}>
            {children}
        </PagesContext.Provider>
    );
}