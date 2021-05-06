import React from 'react';
import { ProvideAuth } from './hooks/useAuth';
import NavBar from './Screen/NavBar';

const App = () => {
  return (
    <ProvideAuth>
      <NavBar/>
    </ProvideAuth>

  );
};

export default App;
