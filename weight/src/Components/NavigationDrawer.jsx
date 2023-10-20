import priyanka from "../assets/priyanka.jpg";
import React from "react";
import Button from "./Button";
import {
  faLocationDot,
  faTruck,
  faCircleExclamation,
  faArrowRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { userData } from "../redux_store/slice/userInfoSlice";
import { useSelector } from "react-redux";
import axios from "axios";

const NavigationDrawer = () => {
  const user = useSelector(userData);
  console.log(user?.data.userId);

  const handleLogOut = async (event) => {
    try {
      const res = await axios.post(
        "http://[::1]:3000/users/logout",
        user?.data.userId,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[25%] min-h-full flex flex-col flex-shrink -mt-6 p-6 z-10 bg-white ">
      <div className="flex  flex-col lg:flex-row h-1/5 items-center">
        <img
          src={priyanka}
          alt="Priyanka"
          className="w-24 h-24 rounded-full m-3"
        />
        <span>
          <h4>Priyanka Chopra</h4>
          <p className="text-xs lg:text-base ">priyankachopra@gmail.com</p>
        </span>
      </div>

      <div className="w-full flex flex-col items-start">
        <Button to="/ZoneTracker" icon={faLocationDot}>
          Zone Tracker
        </Button>

        <Button to="/VehicleTracker" icon={faTruck}>
          Vehicle Tracker
        </Button>
        <Button to="/WeightTracker" icon={faTruck}>
          Weight Tracker
        </Button>
        <Button to="/UserTracker" icon={faUser}>
          User Tracker
        </Button>

        <Button to="/Report" icon={faCircleExclamation}>
          Report
        </Button>

        <Button
          to="/Logout"
          icon={faArrowRightFromBracket}
          className="text-red-600"
          onClick={(event) => handleLogOut(event)}
        >
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default NavigationDrawer;
