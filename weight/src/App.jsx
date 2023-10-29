import React, { useState, useEffect } from "react";
import LoginPage from "./Pages/LoginPage";
import ZoneTracker from "./Pages/ZoneTracker";
import WeighingTracker from "./Pages/WeighingTracker";

import NavigationDrawer from "./Components/NavigationDrawer";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginStatus } from "./redux_store/slice/userInfoSlice";


const App = () => {
  const isLoggedIn = useSelector(loginStatus);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <WeighingTracker />
        </>
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

export default App;
