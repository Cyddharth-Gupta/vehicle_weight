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
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setLoginStatus } from "../redux_store/slice/userInfoSlice";

const NavigationDrawer = () => {
  const user = useSelector(userData);
  console.log(user);
  const dispatch = useDispatch();
  //localStorage.setItem("userIdData", JSON.stringify(user));
  const storedUserData = JSON.parse(localStorage.getItem("userIdData"));

  const handleLogOut = async () => {
    try {
      dispatch(setLoginStatus(false));
      localStorage.clear();
      const res = await axios.post(
        "http://[::1]:3000/users/logout",
        user?.data.userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      window.close();

      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[20%] min-h-full flex flex-col flex-shrink -mt-6 p-6 z-10 bg-white ">
      <div className="flex  flex-col lg:flex-row h-1/5 items-center">
        <img
          src={priyanka}
          alt="Priyanka"
          className="w-20 h-20 rounded-full m-3 ml-1"
        />
        <span>
          <h4>{storedUserData?.data?.userData?.fullName}</h4>
          <p className="text-xs lg:text-md ">priyankachopra@gmail.com</p>
        </span>
      </div>

      <div className="w-full flex flex-col items-start">
        <Button to="/ZoneTracker" icon={faLocationDot}>
          Zone Tracker
        </Button>

        <Button to="/VehicleTracker" icon={faTruck}>
          Vehicle Tracker
        </Button>
        <Button to="/WeighingTracker" icon={faTruck}>
          Weighing Tracker
        </Button>
        <Button to="/UserTracker" icon={faUser}>
          User Tracker
        </Button>

        <Button to="/Report" icon={faCircleExclamation}>
          Report
        </Button>

        <Button
          icon={faArrowRightFromBracket}
          className="text-red-600"
          onClick={handleLogOut}
        >
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default NavigationDrawer;
