import { createContext, useState, useEffect } from 'react';

export const AdminCustomContext = createContext();

export const AdminCustomProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    return (
        <AdminCustomContext.Provider value={{ loading, setLoading }}>
            {children}
        </AdminCustomContext.Provider>
    )
}