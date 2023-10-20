import React from "react";
import NavigationDrawer from "../Components/NavigationDrawer";
import ZoneTrackerTable from "../Components/ZoneTrackerTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddIcon from '@mui/icons-material/Add';
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const ZoneTracker = () => {
  return (
    <div className="flex flex-row">
      <NavigationDrawer />
      <div className="bg-[#F0F0F0] w-full h-full flex flex-col min-h-screen">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
          <button>
            <FontAwesomeIcon
              icon={faAngleLeft}
              className=" text-4xl font-medium mb-5 ml-3"
            />
          </button>
          <h1 className="text-4xl p-7">Zone Tracker</h1>
          </div>
          <button className="items-end m-8 rounded-lg px-10 py-4 text-white  bg-[#6759FF]">
          <AddIcon className="mr-2"/>
          <Link to="/ZoneInformation">Add Zone</Link>
          </button>
        </div>
        <ZoneTrackerTable />
      </div>
    </div>
  );
};

export default ZoneTracker;
