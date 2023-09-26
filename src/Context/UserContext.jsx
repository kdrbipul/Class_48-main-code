import React, { createContext } from 'react';

export const AuthContext = createContext('');

const UserContext = ({ children }) => {
    
    const userInfo = {
        name:"Abdul Kader",
    }
    
    
    return (
        <AuthContext.Provider value={userInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default UserContext;