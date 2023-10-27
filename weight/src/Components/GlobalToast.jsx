import React from "react";
import { Toaster } from "react-hot-toast";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const GlobalToast = ({ children }) => {
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          success: {
            icon: <CheckCircleIcon color="secondary" />,
            style: {
              color: "#10B981",
            },
          },
        }}
      />
      {children}
    </div>
  );
};

export default GlobalToast;
