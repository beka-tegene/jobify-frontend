import React from "react";
import login1 from "../../../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextInput, ButtonUi } from "../../../Components";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
import { Navigate } from "../../Landing/Navigate";
import { addAdminRequest } from "../../../Store/Hook/adminSlice";
import { useDispatch } from "react-redux";
export const Register = () => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    await dispatch(addAdminRequest(data));
    navigate("/login");
  };
  return (
    <div>
      <Navigate />

      <div className="h-screen w-full py-10 px-[8%] ">
        <div className="bg-[#fafeff] border border-[#1EBBD7] h-full w-full rounded-xl grid grid-cols-2">
          <div className="m-3 rounded-xl overflow-hidden ">
            <div className="mt-8">
              <h2 className="font-semibold text-3xl text-center mb-2">
                Hello Again!
              </h2>
              <p className="text-center mb-2">
                Wellcame back you've been missed!
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3 mt-3 w-[90%] m-auto"
              >
                <div className="flex items-center gap-3">
                  <TextInput
                    label="Full Name"
                    name="fullName"
                    control={control}
                    rules={{
                      required: "Full Name is required",
                    }}
                    className={"text-white"}
                  />
                  <TextInput
                    label="Email"
                    name="email"
                    type="email"
                    control={control}
                    rules={{
                      required: "Email is required",
                    }}
                    className={"text-white"}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <TextInput
                    label="Username"
                    name="username"
                    control={control}
                    rules={{
                      required: "Username is required",
                    }}
                    className={"text-white"}
                  />
                  <TextInput
                    label="Phone Number"
                    name="phoneNumber"
                    type="tel"
                    control={control}
                    rules={{
                      required: "Phone Number is required",
                    }}
                    className={"text-white"}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <TextInput
                    label="Password"
                    name="password"
                    type="password"
                    control={control}
                    rules={{
                      required: "Password is required",
                    }}
                    className={"text-white"}
                  />
                  <TextInput
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    control={control}
                    rules={{
                      required: "Confirm Password is required",
                    }}
                    className={"text-white"}
                  />
                </div>
                <ButtonUi
                  label="Sign up"
                  type="submit"
                  className="bg-[#108A58] hover:bg-[#48b386] w-full py-2 text-white font-semibold rounded-md text-lg"
                />
              </form>
              <div className="flex items-center gap-3 mt-3 w-[90%] m-auto">
                <hr className="w-1/2 h-[2px] bg-[#b7c0bd] border-none rounded-full" />
                <span className="text-xs text-gray-400 w-fit whitespace-nowrap">
                  Or continue with
                </span>
                <hr className="w-1/2 h-[2px] bg-[#b7c0bd] border-none rounded-full" />
              </div>
              <div className="flex items-center justify-center mt-4 gap-7 w-[90%] m-auto">
                <Link
                  to={""}
                  className="p-4 rounded-xl  hover:bg-[#FFFFFF] border border-[#272727] hover:shadow-md shadow hover:border-none"
                >
                  <FaGoogle size={30} />
                </Link>
                <Link
                  to={""}
                  className="p-4 rounded-xl hover:bg-[#FFFFFF] border border-[#272727] hover:shadow-md shadow hover:border-none"
                >
                  <FaApple size={30} />
                </Link>
                <Link
                  to={""}
                  className="p-4 rounded-xl hover:bg-[#FFFFFF] border border-[#272727] hover:shadow-md shadow hover:border-none"
                >
                  <FaFacebook size={30} />
                </Link>
              </div>
            </div>
          </div>
          <div className="m-3 rounded-xl overflow-hidden bg-[#1fa2b9]">
            <div>
              <img src={login1} alt="login1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
