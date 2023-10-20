import React, { useState } from "react";
import NavigationDrawer from "../Components/NavigationDrawer";
import VehicleTable from "../Components/VehicleTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import FileUploadModal from "./FileUploadModal";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const VehicleTracker = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle file upload
  const handleFileUpload = (event) => {
    // Add your file upload logic here
    // You can access the selected file from event.target.files
  };
  return (
    <div className="flex flex-row">
      <NavigationDrawer />
      <div className="bg-[#F0F0F0] w-full h-full flex flex-col min-h-screen">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <button>
              <Link to = "/ZoneTracker">
              <FontAwesomeIcon
                icon={faAngleLeft}
                className=" text-4xl font-medium mb-5 ml-3"
              />
              </Link>
            </button>
            <h1 className="text-4xl p-7">Vehicle Tracker</h1>
          </div>
          <div className="flex flex-row">
            <button className="items-end m-8 mr-3 flex flex-row rounded-lg px-10 py-4 text-white  bg-[#6759FF]">
              <AddIcon className="mr-2" />
              <Link to="/VehicleInformation">Add New</Link>
            </button>
            <button
              className="items-end m-8 flex flex-row rounded-lg px-10 py-4 text-white  bg-[#6759FF]"
              onClick={openModal}
            >
              <FileDownloadOutlinedIcon />
              <p className="mx-2"> Import </p>
            </button>
          </div>
        </div>
        <VehicleTable />
      </div>
      <FileUploadModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        handleFileUpload={handleFileUpload}
      />
    </div>
  );
};

export default VehicleTracker;
