import React from "react";
import NavigationDrawer from "../Components/NavigationDrawer";
import UserTrackerTable from "../Components/UserTrackerTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";

const UserTracker = () => {
  return (
    <div className="flex flex-row">
      <NavigationDrawer />
      <div className="bg-[#F0F0F0] w-full h-full flex flex-col min-h-screen">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
          <button>
            <Link to = "/WeighingTracker">
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="lg:text-h1 md:text-lg xl:text-[2.25rem] 2xl:text-[2.5rem] 3xl:text-[3rem] p-7 font-medium mb-5 ml-3"
            />
            </Link>
          </button>
          <h1 className="lg:text-h1 md:text-lg xl:text-[2.25rem] 2xl:text-[2.5rem] 3xl:text-[3rem] p-7">User Tracker</h1>
          </div>
          <button className="items-end m-8 rounded-lg px-10 py-4 text-white  bg-[#6759FF] hover:bg-[#5549CC]">
            <AddIcon className="mr-2"/>
            <Link to="/UserInformation">Add User</Link>
          </button>
        </div>
        <UserTrackerTable />
      </div>
    </div>
  );
};

export default UserTracker;
