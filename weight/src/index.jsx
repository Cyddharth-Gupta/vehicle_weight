import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ZoneInformation from './Pages/ZoneInformation';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import VehicleInformation from './Pages/VehicleInformation';
import UserTracker from './Pages/UserTracker';
import Report from './Pages/Report';
import LoginPage from './Pages/LoginPage';
import ZoneTracker from './Pages/ZoneTracker';
import UserInformation from './Pages/UserInformation';
import WeightTracker from './Pages/WeightTracker';
import Rfid from './Pages/Rfid';
import VehicleTracker from "./Pages/VehicleTracker";
import {Provider} from "react-redux"
import {store} from "./redux_store/store"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ZoneTracker",
    element: <ZoneTracker />,
  },
  {
    path: "/WeightTracker",
    element: <WeightTracker />,
  },
  {
    path: "/ZoneInformation",
    element: <ZoneInformation />,
  },
  {
    path: "/UserInformation",
    element: <UserInformation />,
  },
  {
    path: "/VehicleTracker",
    element: <VehicleTracker />,
  },
  {
    path: "/Rfid",
    element: <Rfid />,
  },
  {
    path: "/UserTracker",
    element: <UserTracker />,
  },
  {
    path: "/Report",
    element: <Report />,
  },
  {
    path: "/VehicleInformation",
    element: <VehicleInformation />,
  },
  {
    path: "/LogOut",
    element: <LoginPage />,
  },
]);

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>,
    document.body
  );
}

render();