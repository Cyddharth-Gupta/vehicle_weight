import React from "react";
import ReusableForm from "../Components/ReusableForm";
import informationTruck from "../assets/zone_information_truck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import NavigationDrawer from "../Components/NavigationDrawer";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useSelector } from "react-redux";
import { zoneFormGeneralData } from "../redux_store/slice/zoneTrackerSlice";
import { userTrackerData } from "../redux_store/slice/userTrackerSlice";

const ZoneInformationAdvance = (props) => {
  const { enqueueSnackbar } = useSnackbar();
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
      if (key === "baudRate" || key === "dataBits" || key === "stopBits") {
        formDataObject[key] = parseFloat(value);
      } else if (key === "flowControl") {
        formDataObject[key] = value === "true" ? true : false;
      }else {
        formDataObject[key] = value;
      }
    });

    const mergedData = {
      ...zoneFormData,
      ...formDataObject,
    };

    console.log(mergedData);

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
      enqueueSnackbar("Form submitted successfully!", { variant: "success" });
      return res.data;
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Form submission failed.", { variant: "error" });
    }

    console.log(formDataObject);
    const form = event.target;
    form.reset();
  };

  const fields = [
    {
      name: "cctvIPAddress",
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
      name: "dataBits",
      label: "Data Bits",
      type: "number",
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
  const customClass = "mt-10";
  return (
    <main className="flex flex-row items-center justify-center">
      <img src={informationTruck} alt={"truck"} className="h-auto w-auto"/>
      <ReusableForm
        onSubmit={onSubmit}
        fields={fields}
        errors={errors}
        showCancel={true}
        submitButtonLabel={"Submit"}
        customInputClass={customInputClass}
        customButtonClass={customButtonClass}
        customClass={customClass}
        cancelLink={'/ZoneTracker'}
        onChange = {props.changeTabprop}
      />
    </main>
  );
};

export default ZoneInformationAdvance;
