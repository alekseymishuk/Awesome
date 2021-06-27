import { useContext } from 'react';
import { authContext } from '../providers/AuthContextProvider';

export const useAuth = () => {
    return useContext(authContext);
};
