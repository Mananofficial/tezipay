import { createContext, useState, useEffect } from "react";

export const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);

    return (
        <AdminAuthContext.Provider value={{ admin, setAdmin, loading, setLoading }}>
            {children}
        </AdminAuthContext.Provider>
    )
}