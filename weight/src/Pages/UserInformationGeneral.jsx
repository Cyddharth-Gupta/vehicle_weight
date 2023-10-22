import React from "react";
import ReusableForm from "../Components/ReusableForm";
import glass from "../assets/vehicleinformationglass.svg";
import { useForm } from "react-hook-form";
import { userGeneralInfo } from "../redux_store/slice/userTrackerSlice";
import { useDispatch } from "react-redux";

const UserInformationGeneral = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    dispatch(userGeneralInfo(formDataObject));
    console.log(formDataObject);
    const form = event.target;
    form.reset();
  };

  const fields = [
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
    <main className="flex flex-row justify-center items-center mt-36">
      <img src={glass} alt={"magnifying glass"} className="h-auto w-auto"/>
      <ReusableForm
        onSubmit={onSubmit}
        fields={fields}
        errors={errors}
        showCancel={true}
        submitButtonLabel={"Proceed"}
      />
    </main>
  );
};

export default UserInformationGeneral;
