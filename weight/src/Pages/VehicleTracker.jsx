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
              <Link to="/ZoneTracker">
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  className="lg:text-[2rem] md:text-[1.75rem] xl:text-[2.25rem] 2xl:text-[2.5rem] 3xl:text-[3rem] p-7p-7 font-medium mb-5 ml-3"
                />
              </Link>
            </button>
            <h1 className="lg:text-[2rem] md:text-[1.75rem] xl:text-[2.25rem] 2xl:text-[2.5rem] 3xl:text-[3rem] p-7">
              Vehicle Tracker
            </h1>
          </div>
          <div className="flex flex-row">
            <Link to="/VehicleInformation">
              <button className="items-end m-8 mr-3 flex flex-row rounded-lg px-10 py-4 text-white  bg-[#6759FF] hover:bg-[#5549CC]">
                <AddIcon className="mr-2" />
                Add New
              </button>
            </Link>
            <button
              className="items-end m-8 flex flex-row rounded-lg px-10 py-4 text-white  bg-[#6759FF] hover:bg-[#5549CC]"
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
