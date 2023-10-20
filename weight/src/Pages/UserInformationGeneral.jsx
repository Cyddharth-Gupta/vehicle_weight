import React from "react";
import ReusableForm from "../Components/ReusableForm";
import glass from "../assets/vehicleinformationglass.svg";
import { useForm } from "react-hook-form";

const UserInformationGeneral = () => {
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
        name: "usernam",
        label: "Username",
        type: "text",
        required: true,
        maxLength: 20,
      },
      {
        name: "usernam",
        label: "Username",
        type: "text",
        required: true,
        maxLength: 20,
      },
      {
        name: "usernam",
        label: "Username",
        type: "text",
        required: true,
        maxLength: 20,
      },
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
  ];

  return (
        <main className="flex flex-row justify-center items-center ">
          <img src={glass} alt={"magnifying glass"} />
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
