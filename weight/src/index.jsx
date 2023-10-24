import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ZoneInformation from "./Pages/ZoneInformation";
import { SnackbarProvider, SnackbarContent } from "notistack";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WeighingInformation from "./Pages/WeighingInformation";
import UserTracker from "./Pages/UserTracker";
import VehicleInformation from "./Pages/VehicleInformation";
import Report from "./Pages/Report";
import LoginPage from "./Pages/LoginPage";
import ZoneTracker from "./Pages/ZoneTracker";
import UserInformation from "./Pages/UserInformation";
import WeighingTracker from "./Pages/WeighingTracker";
import VehicleTracker from "./Pages/VehicleTracker";
import { Provider } from "react-redux";
import { store } from "./redux_store/store";
import EditableUserInformation from "./Pages/EditableUserInformation";
import muitheme from "./Components/muitheme";
import { ThemeProvider } from "@emotion/react";

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
    path: "/WeighingTracker",
    element: <WeighingTracker />,
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
    path: "/EditableUserInformation",
    element: <EditableUserInformation />,
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
    path: "/WeighingInformation",
    element: <WeighingInformation />,
  },
]);

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={muitheme}>
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          className={`snackbarClasses`}
        >
          <SnackbarContent
            sx={{
              backgroundColor: "bg-pink-500", //your custom color here
            }}
            className="snackbarClasses"
          />
          <RouterProvider router={router} />
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>,
    document.body
  );
}

render();
