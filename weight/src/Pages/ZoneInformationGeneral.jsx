import React from "react";
import ReusableForm from "../Components/ReusableForm";
import informationTruck from "../assets/zone_information_truck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { zoneFormGeneralDataInfo } from "../redux_store/slice/zoneTrackerSlice";
import { useDispatch } from "react-redux";

const ZoneInformationGeneral = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    dispatch(zoneFormGeneralDataInfo(formDataObject));
    console.log(formDataObject);
      const form = event.target;
      form.reset();
      window.alert("Form Submitted Successfully!")
      console.log(res.data);
      return res.data;
    // const form = event.target;
    // form.reset();
  };

  const fields = [
    {
      name: "ZoneName",
      label: "Zone Name",
      type: "text",
      required: true,
      maxLength: 20,
    },
    {
      name: "Address",
      label: "Address",
      type: "text",
      required: true,
      maxLength: 50,
    },
    {
      name: "City",
      label: "City",
      type: "text",
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    {
      name: "State",
      label: "State",
      type: "text",
      required: true,
      maxLength: 20,
    },
    {
      name: "managedBy",
      label: "Managed By",
      type: "select",
      required: true,
      options: ["","a", "b"],
    },
    {
      name: "Status",
      label: "Status",
      type: "select",
      required: true,
      options: ["","Active", "Inactive"],
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
        submitButtonLabel={"Proceed"}
        customInputClass={customInputClass}
        customButtonClass={customButtonClass}
      />
    </main>
  );
};

export default ZoneInformationGeneral;
