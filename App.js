import React from 'react';
import AuthContextProvider from './providers/AuthContextProvider';
import NavBar from './Screen/NavBar';

const App = () => {
    return (
        <AuthContextProvider>
            <NavBar />
        </AuthContextProvider>
    );
};

export default App;
