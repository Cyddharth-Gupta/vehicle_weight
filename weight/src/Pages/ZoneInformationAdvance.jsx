import React from "react";
import ReusableForm from "../Components/ReusableForm";
import informationTruck from "../assets/zone_information_truck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import NavigationDrawer from "../Components/NavigationDrawer";
import axios from "axios";
import { useSelector } from "react-redux";
import { zoneFormGeneralData } from "../redux_store/slice/zoneTrackerSlice";

const ZoneInformationAdvance = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const zoneFormData = useSelector(zoneFormGeneralData);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    const mergedData = {
      ...zoneFormData,
      ...formDataObject,
    };

    try {
      const res = await axios.post(
        "http://[::1]:3000/zones",
        JSON.stringify(mergedData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const form = event.target;
      form.reset();
      log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }

    console.log(formDataObject);
    
  };

  const fields = [
    {
      name: "cctvipAddress",
      label: "Cctv IPAddress",
      type: "text",
      required: true,
      maxLength: 70,
    },
    {
      name: "rfidPort",
      label: "RFID Port",
      type: "text",
      required: true,
      maxLength: 20,
    },
    {
      name: "weighingPort",
      label: "Weighing Port",
      type: "number",
      required: true,
      maxLength: 20,
    },
    {
      name: "baudRate",
      label: "Baud Rate",
      type: "number",
      maxLength: 20,
      required: true,
    },
    {
      name: "parity",
      label: "Parity",
      type: "text",
      required: true,
      maxLength: 20,
    },
    {
      name: "stopBits",
      label: "Stop Bits",
      type: "number",
      required: true,
      maxLength: 20,
    },
    {
      name: "flowControl",
      label: "Flow Control",
      type: "boolean",
      required: true,
      maxLength: 20,
    },
  ];

  const customInputClass = "w-96";
  const customButtonClass = "m-3";
  return (
    <main className="flex flex-row justify-normal">
      <img src={informationTruck} alt={"truck"} />
      <ReusableForm
        onSubmit={onSubmit}
        fields={fields}
        errors={errors}
        showCancel={true}
        submitButtonLabel={"Submit"}
        customInputClass={customInputClass}
        customButtonClass={customButtonClass}
        validation={{
          cctvipAddress: {
            pattern: {
              value: /^(\d{1,3}\.){3}\d{1,3}$/,
              message: "Invalid IP address format",
            },
          },
        }}
      />
    </main>
  );
};

export default ZoneInformationAdvance;
