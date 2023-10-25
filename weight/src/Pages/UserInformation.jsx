import React from "react";
import NavigationDawer from "../Components/NavigationDrawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import TabsUserInformation from "../Components/TabsUserInformation";
import { Link } from "react-router-dom";

const UserInformation = () => {
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
      name: "username",
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
    <div className="flex flex-row min-h-full">
      <NavigationDawer />
      <div className=" bg-[#F0F0F0] flex flex-grow w-full min-h-screen  flex-col">
        <div className="flex flex-row">
          <button>
            <Link to="/UserTracker">
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="lg:text-[2rem] md:text-[1.75rem] xl:text-[2.25rem] 2xl:text-[2.5rem] 3xl:text-[3rem] p-7 font-medium"
              />
            </Link>
          </button>
          <h1 className="lg:text-[2rem] md:text-[1.75rem] xl:text-[2.25rem] 2xl:text-[2.5rem] 3xl:text-[3rem] p-7 font-medium"> User Information</h1>
        </div>
        <TabsUserInformation />
      </div>
    </div>
  );
};

export default UserInformation;
