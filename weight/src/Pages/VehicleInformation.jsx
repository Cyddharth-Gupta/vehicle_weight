import React from "react";
import truck from "../assets/vehicleinformationtruck.svg";
import ReusableForm from "../Components/ReusableForm";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import NavigationDrawer from "../Components/NavigationDrawer";

const VehicleInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    console.log(formDataObject);
    const form = event.target;
    form.reset();
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
      name: "ZoneName",
      label: "Zone Name",
      type: "text",
      required: true,
      maxLength: 20,
    },
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
  ];

  const customClass = "grid w-2/3 grid-cols-2 gap-4 ";
  const customInputClass = "mx-14";
  const customLabelClass = "mx-14";
  const customButtonClass="px-32 my-5";
  return (
    <div className="flex flex-row">
      <NavigationDrawer />
      <div className="bg-[#F0F0F0] w-full h-full min-h-screen flex flex-col">
        <div className="flex flex-row">
          <button>
            <FontAwesomeIcon
              icon={faAngleLeft}
              className=" text-4xl p-5 font-medium"
            />
          </button>
          <h1 className="text-4xl p-5 font-medium"> Vehicle Information</h1>
        </div>

        <main className="flex flex-row justify-normal ">
          <img src={truck} alt="truck" className="-ml-60" />
          <ReusableForm
            onSubmit={onSubmit}
            className="flex-row"
            fields={fields}
            errors={errors}
            submitButtonLabel={"Submit"}
            customClass={customClass}
            customInputClass={customInputClass}
            customLabelClass={customLabelClass}
            customButtonClass={customButtonClass}
          />
        </main>
      </div>
    </div>
  );
};

export default VehicleInformation;
