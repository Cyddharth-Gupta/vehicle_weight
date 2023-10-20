import React, { useState } from 'react';
import LoginPage from './Pages/LoginPage';
import ZoneTracker from './Pages/ZoneTracker';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
         <ZoneTracker />
        </>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
