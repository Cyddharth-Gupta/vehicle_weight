import React from "react";
import ReusableForm from "../Components/ReusableForm";
import { useForm } from "react-hook-form";
import CloseIcon from '@mui/icons-material/Close';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

const RequestReportModal = ({ isOpen, onRequestClose, onRequestSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const customInputClass = "w-full min-w-full my-4";
  const customSelectClass = "w-full min-w-full my-4";
  const customClass = "m-4";
  const customButtonClass = "flex ml-64 rounded-md";
  const fields = [
    {
      name: "vehicletype",
      label: "Vehicle Type",
      type: "text",
      required: true,
      maxLength: 20,
    },
    {
      name: "weighingtype",
      label: "Weighing Type",
      type: "select",
      required: true,
      maxLength: 50,
      options: ["Select Type", "SUV", "Hatchback", "Sedan"],
    },
    {
      name: "weight",
      label: "Weight (Kg)",
      type: "password",
      required: true,
      maxLength: 50,
    },
  ];

  return isOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50">
      <div className="relative w-lg mx-auto my-6">
        <div className="modal bg-white shadow-md rounded-lg w-[30rem]">
          <div className="modal-content p-4">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={onRequestClose}
            >
              <CloseIcon />
            </button>
            <h1 className="text-3xl p-3 mb-4">Request Report</h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="flex flex-row items-center justify-center">
                <div>
                  <h2 className="mb-2">From</h2>
                  <DatePicker/>
                </div>
                <HorizontalRuleIcon className="mx-4 mt-5" /> 
                <div>
                  <h2 className="mb-2">To</h2>
                  <DatePicker/>
                </div>
              </div>
            </LocalizationProvider>
            <ReusableForm
              fields={fields}
              errors={errors}
              customInputClass={customInputClass}
              submitButtonLabel={"Confirm"}
              customClass={customClass}
              customSelectClass={customSelectClass}
              customButtonClass={customButtonClass}
            />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default RequestReportModal;
