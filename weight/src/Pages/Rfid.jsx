import React from "react";
import truck from "../assets/vehicleinformationtruck.svg";
import ReusableForm from "../Components/ReusableForm";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import NavigationDrawer from "../Components/NavigationDrawer";
import RFIDtruck from "../assets/RFIDtruck.svg";

const Rfid = () => {
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

  const customClass = "grid w-2/3 grid-cols-2 gap-4 mx-5 ";
  const customInputClass = "mx-14";
  const customLabelClass = "mx-14";
  const customButtonClass = "px-16 my-5";
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
            showCancel={true}
          />
          <div className="bg-white shadow-lg rounded-md p-6 h-1/2 text-center items-center w-90 ml-4 mt-20">
            <button className=" text-white bg-[#6759FF] hover:bg-[#5549CC] py-2 px-24">
              Scan RFID Card
            </button>
            <div className=" my-3 rounded-md px-16 py-6 text-[#6759FF] border border-[#6759FF] hover:bg-gray-200">
              Scan RFID Card
              <p className="text-black">ID : #t86382bjhbjh</p>
            </div>
            <div className="bg-slate-200 flex flex-row items-center justify-center px-16 py-4">
              <p>Weight:</p>
              <p className="text-[#6759FF] ml-2">6770Kg</p>
            </div>
            <div className="w-full">
              <img src={RFIDtruck} className="my-3" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Rfid;
