import React, { useState } from 'react';
import LoginPage from './Pages/LoginPage';
import ZoneTracker from './Pages/ZoneTracker';
import WeighingTracker from './Pages/WeighingTracker';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
         <WeighingTracker />
        </>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
