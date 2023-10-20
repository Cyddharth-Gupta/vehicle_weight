import React, { useState } from "react";
import NavigationDrawer from "../Components/NavigationDrawer";
import ReportTable from "../Components/ReportTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import RequestReportModal from "./RequestReportModal"; // Import the modal component

const Report = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRequestSubmit = () => {
    // Handle the report request submission logic here
    // You can send the request to the server or perform other actions
    // Close the modal after submitting
    closeModal();
  };

  return (
    <div className="flex flex-row">
      <NavigationDrawer />
      <div className="bg-[#F0F0F0] w-full h-full flex flex-col min-h-screen">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <button onClick={openModal}>
              <FontAwesomeIcon
                icon={faAngleLeft}
                className=" text-4xl font-medium mb-5 ml-3"
              />
            </button>
            <h1 className="text-4xl p-7">Report</h1>
          </div>
          <button
            className="items-end m-8 rounded-lg px-10 py-4 text-white bg-[#6759FF]"
            onClick={openModal}
          >
            Request Report
          </button>
        </div>
        <ReportTable />
      </div>

      <RequestReportModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onRequestSubmit={handleRequestSubmit}
      />
    </div>
  );
};

export default Report;
