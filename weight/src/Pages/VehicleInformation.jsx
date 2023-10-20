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
      name: "rfid",
      label: "RFID",
      type: "number",
      required: true,
      maxLength: 20,
    },
    {
      name: "vehiclenumber",
      label: "Vehicle Number",
      type: "number",
      required: true,
      maxLength: 20,
    },
    {
      name: "vehicletype",
      label: "Vehicle Type",
      type: "select",
      required: true,
      options: ["ALL", "LMV", "HMV", "Pending"],
    },
    {
      name: "tareweight",
      label: "Tare Weight",
      type: "number",
      required: true,
      maxLength: 20,
    },
  ];

  const customInputClass = "mx-14 mb-10";
  const customSelectClass = "mx-14 mb-10";
  const customLabelClass = "mx-14 ";
  const customButtonClass="px-28 my-5";
  const customClass = "ml-60";
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
          <img src={truck} alt="truck" className="-ml-70" />
          <ReusableForm
            onSubmit={onSubmit}
            className="flex-row"
            fields={fields}
            errors={errors}

            submitButtonLabel={"Submit"}
            customInputClass={customInputClass}
            customLabelClass={customLabelClass}
            customButtonClass={customButtonClass}
            customSelectClass = {customSelectClass}
            customClass={customClass}
          />
        </main>
      </div>
    </div>
  );
};

export default VehicleInformation;
