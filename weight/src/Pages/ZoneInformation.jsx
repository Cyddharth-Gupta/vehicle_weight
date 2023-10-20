import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import NavigationDrawer from "../Components/NavigationDrawer";
import TabsZoneInformation from "../Components/TabsZoneInformation";

const ZoneInformation = () => {
  return (
    <div className="flex flex-row">
      <NavigationDrawer />
    <div className="bg-[#F0F0F0] w-full min-h-screen flex flex-col">
      <div className="flex flex-row">
        <button>
          <FontAwesomeIcon
            icon={faAngleLeft}
            className=" text-4xl p-5 font-medium"
          />
        </button>
        <h1 className="text-4xl p-5 font-medium"> Zone Information</h1>
      </div>

      <main className="flex flex-row justify-normal">
       <TabsZoneInformation />
      </main>
    </div>
    </div>
  );
};

export default ZoneInformation;
