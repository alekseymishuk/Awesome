import React, { createContext } from 'react';
import { useProvideAuth } from '../hooks/useProvideAuth';

export const authContext = createContext();

export default function AuthContextProvider({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
