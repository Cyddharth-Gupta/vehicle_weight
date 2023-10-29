import React from "react";
import truck from "../assets/loginpagetruck.svg";
import ReusableForm from "../Components/ReusableForm";
import { useForm } from "react-hook-form";
import { logInUser } from "../redux_store/slice/userInfoSlice";
import { getUserLoginData } from "../redux_store/slice/userInfoSlice";
import { userData } from "../redux_store/slice/userInfoSlice";
import { setLoginStatus } from "../redux_store/slice/userInfoSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { userError } from "../redux_store/slice/userInfoSlice";
import { loginStatus } from "../redux_store/slice/userInfoSlice";
import { userInfoLoading } from "../redux_store/slice/userInfoSlice";

const LoginPage = ({onLogin}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const userLogInData = useSelector(userData);
  const isLoggedIn = useSelector(loginStatus);
  const isLoading = useSelector(userInfoLoading);
  const error = useSelector(userError);

  const handleLogin = () => {
    console.log(userLogInData);
    if (userLogInData?.data?.isUserRegistered === true) {
      dispatch(setLoginStatus(true));
      toast.success("Login Successful");
    } else if (userLogInData?.isUserRegistered === false || error !== null) {
      dispatch(setLoginStatus(false));
      toast.error("Login Failed");
    }
  };

  React.useEffect(() => {
     userLogInData !== null && handleLogin();
     console.log(userLogInData);
  },[userLogInData]);


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    dispatch(logInUser(formDataObject));
    console.log(formDataObject);
    
  };
  const fields = [
    {
      name: "username",
      label: "User Name",
      type: "text",
      required: true,
      maxLength: 20,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      required: true,
      maxLength: 20,
    },
  ];

  const mycustomClass = "mx-4 my-12 w-full";
  const custombuttonclass = "px-36 m-6";
  return (
    <div className="flex flex-row justify-evenly h-screen relative">
      <div className="bg-blue-300 sm:w-[20rem] lg:w-[70rem] absolute top-0 left-0 bottom-0 -ml-28 opacity-40" />
      <img src={truck} alt="truck" className="w-full z-10 h-auto" />
      <div className="flex flex-col justify-center items-start mr-36 z-20 relative">
        <h1 className="text-h1">Login</h1>
        <ReusableForm
          fields={fields}
          onSubmit={onSubmit}
          errors={errors}
          submitButtonLabel={"Login"}
          customClass={mycustomClass}
          customButtonClass={custombuttonclass}
        />
      </div>
    </div>
  );
};

export default LoginPage;
