import React from "react";
import truck from "../assets/vehicleinformationtruck.svg";
import ReusableForm from "../Components/ReusableForm";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import NavigationDrawer from "../Components/NavigationDrawer";
import RFIDtruck from "../assets/RFIDtruck.svg";
import { Link } from "react-router-dom";
import axios from "axios";

const WeighingInformation = () => {
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
      if (
        key === "charges" ||
        key === "grossWeight" ||
        key === "tareWeight" ||
        key === "netWeight"
      ) {
        formDataObject[key] = parseFloat(value);
      } else {
        formDataObject[key] = value;
      }
    });

    try {
      const res = await axios.post(
        "http://[::1]:3000/weighing-data",
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

    // console.log(formDataObject);
    // const form = event.target;
    // form.reset();
  };

  const fields = [
    {
      name: "rfidNumber",
      label: "RFID Number",
      type: "number",
      required: true,
      maxLength: 20,
    },
    {
      name: "vehicleNumber",
      label: "Vehicle Number",
      type: "text",
      required: true,
      maxLength: 50,
    },
    {
      name: "slipNumber",
      label: "Slip Number",
      type: "text",
      required: true,
      maxLength: 20,
    },
    {
      name: "charges",
      label: "Charges",
      type: "number",
      required: true,
      maxLength: 50,
    },
    {
      name: "supplier",
      label: "Supplier",
      type: "text",
      required: true,
      maxLength: 20,
    },
    {
      name: "measureType",
      label: "Measure Type",
      type: "text",
      required: true,
      maxLength: 50,
    },
    {
      name: "weightType",
      label: "Weight Type",
      type: "text",
      required: true,
      maxLength: 20,
    },
    {
      name: "grossWeight",
      label: "Gross Weight",
      type: "number",
      required: true,
      maxLength: 20,
    },
    {
      name: "tareWeight",
      label: "Tare Weight",
      type: "number",
      required: true,
      maxLength: 50,
    },
    {
      name: "netWeight",
      label: "Net Weight",
      type: "number",
      required: true,
      maxLength: 20,
    },
    {
      name: "vehicleType",
      label: "Vehicle Type",
      type: "select",
      required: true,
      options: ["ALL", "LMV", "HMV"],
    },
    {
      name: "material",
      label: "Material",
      type: "text",
      required: true,
      maxLength: 20,
    },
    {
      name: "userId",
      label: "User ID",
      type: "text",
      required: true,
      maxLength: 50,
    },
    {
      name: "vehicleId",
      label: "Vehicle ID",
      type: "text",
      required: true,
      maxLength: 50,
    },
    {
      name: "zoneId",
      label: "Zone ID",
      type: "text",
      required: true,
      maxLength: 50,
    },
    {
      name: "zoneName",
      label: "Zone Name",
      type: "text",
      required: true,
      maxLength: 50,
    },
    {
      name: "address",
      label: "Address",
      type: "text",
      required: true,
      maxLength: 50,
    },
    {
      name: "city",
      label: "City",
      type: "text",
      required: true,
      maxLength: 50,
    },
    {
      name: "state",
      label: "State",
      type: "text",
      required: true,
      maxLength: 50,
    },
    {
      name: "employeeName",
      label: "Employee Name",
      type: "text",
      required: true,
      maxLength: 50,
    },
  ];

  const customClass = "grid w-2/3 grid-cols-2 gap-4 mx-5 ";
  const customInputClass = "mx-14";
  const customLabelClass = "mx-14";
  const customSelectClass = "mx-14";
  const customButtonClass = "px-16 my-5";
  return (
    <div className="flex flex-row">
      <NavigationDrawer />
      <div className="bg-[#F0F0F0] w-full h-full min-h-screen flex flex-col">
        <div className="flex flex-row">
          <button>
            <Link to = "/WeighingTracker">
            <FontAwesomeIcon
              icon={faAngleLeft}
              className=" text-4xl p-5 font-medium"
            />
            </Link>
          </button>
          <h1 className="text-4xl p-5 font-medium"> Weighing Information </h1>
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
            customSelectClass={customSelectClass}
            showCancel={true}
          />
          <div className="bg-white shadow-lg rounded-md p-6 h-1/2 text-center items-center w-[32rem] mr-6 ml-4 mt-20">
            <button className=" text-white bg-[#6759FF] hover:bg-[#5549CC] py-2 px-24 w-full">
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
              <img src={RFIDtruck} className="my-3 w-full" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WeighingInformation;
