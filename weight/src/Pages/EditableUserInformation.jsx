import React from "react";
import NavigationDawer from "../Components/NavigationDrawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import glass from "../assets/vehicleinformationglass.svg";
import ReusableForm from "../Components/ReusableForm";
import { Link } from "react-router-dom";

const EditableUserInformation = () => {
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
      name: "usernam",
      label: "Username",
      type: "text",
      required: true,
      maxLength: 20,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      required: true,
      maxLength: 50,
    },
    {
      name: "fullName",
      label: "Name",
      type: "text",
      required: true,
      maxLength: 20,
    },
    {
      name: "employeeId",
      label: "Employee Id",
      type: "text",
      required: true,
      maxLength: 200,
    },
    {
      name: "userType",
      label: "User Type",
      type: "select",
      required: true,
      options: ["", "Admin", "Employee"],
    },
  ];

  return (
    <div className="flex flex-row min-h-full">
      <NavigationDawer />
      <div className=" bg-[#F0F0F0] flex flex-grow w-full min-h-screen  flex-col">
        <div className="flex flex-row">
          <button>
            <Link to="/UserTracker">
              <FontAwesomeIcon
                icon={faAngleLeft}
                className=" text-h1 p-5 font-medium"
              />
            </Link>
          </button>
          <h1 className="text-h1 p-5 font-medium"> User Information</h1>
        </div>
        <main className="flex flex-row justify-center items-center mt-36">
          <img src={glass} alt={"magnifying glass"} className="h-auto w-auto" />
          <ReusableForm
            onSubmit={onSubmit}
            fields={fields}
            errors={errors}
            showCancel={true}
            submitButtonLabel={"Proceed"}
          />
        </main>
      </div>
    </div>
  );
};

export default EditableUserInformation;
