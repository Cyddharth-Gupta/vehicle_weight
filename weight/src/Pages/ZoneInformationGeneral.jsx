import React from "react";
import ReusableForm from "../Components/ReusableForm";
import informationTruck from "../assets/zone_information_truck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import NavigationDrawer from "../Components/NavigationDrawer";
import axios from "axios";

const ZoneInformationGeneral = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    console.log(formDataObject);

    console.log(formDataObject);
    try {
      const res = await axios.post(
        "http://[::1]:3000/zones",
        JSON.stringify(formDataObject),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const form = event.target;
      form.reset();
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
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
      name: "ManagedBy",
      label: "Managed By",
      type: "text",
      required: true,
      maxLength: 20,
    },
    {
      name: "Status",
      label: "Status",
      type: "select",
      required: true,
      options: ["Select Status", "Active", "Inactive", "Pending"],
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
      />
    </main>
  );
};

export default ZoneInformationGeneral;
