import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
    id: string;
    name: string;
    surname: string;
    email: string;
    status: string;
    avatar: string;
    role: string;
}

interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    logout: () => void;
}

const userContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<any>(() => {
        const storeUser = localStorage.getItem('user');
        return storeUser ? JSON.parse(storeUser) : null;
    });

    function logout() {
        setUser(null);
    }

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user))
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    return (
        <userContext.Provider value={{ user, setUser, logout }}>
            {children}
        </userContext.Provider>
    );
}

export function useUser() {
    const context = useContext(userContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}