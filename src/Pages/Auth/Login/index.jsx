import React from "react";
import login1 from "../../../assets/login.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa6";
import { ButtonUi, TextInput } from "../../../Components";
import { Navigate } from "../../Landing/Navigate";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../../Store/Hook/loginSlice";
import { toast } from "react-toastify";
export const Login = () => {
  const { control, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.login);
  if (error !== null) {
    toast.error(error.massage);
  }

  const onSubmit = async (data) => {
    dispatch(loginRequest({ email: data.email, password: data.password }));
  };

  return (
    <div>
      <Navigate />
      <div className="h-screen w-full py-10 px-[8%] ">
        <div className="bg-[#fafeff] border border-[#1EBBD7] h-full w-full rounded-xl grid grid-cols-2">
          <div className="m-3 rounded-xl overflow-hidden bg-[#1fa2b9]">
            <div>
              <img src={login1} alt="login1" />
            </div>
          </div>
          <div className="m-3 rounded-xl overflow-hidden ">
            <div className="mt-16">
              <h2 className="font-semibold text-3xl text-center mb-2">
                Hello Again!
              </h2>
              <p className="text-center mb-2">
                Wellcame back you've been missed!
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3 mt-5 w-[90%] m-auto"
              >
                <TextInput
                  label="Email"
                  type="email"
                  name="email"
                  control={control}
                  rules={{
                    required: "email is required",
                  }}
                  className={"text-white"}
                />
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
                <div className="text-blue-500 text-end">
                  <Link to={""}>Forgot Password?</Link>
                </div>
                <ButtonUi
                  loading={loading}
                  label="Sign in"
                  type="submit"
                  className="bg-[#1EBBD7] hover:bg-[#8ddeec] w-full py-2 text-white font-semibold rounded-md text-lg"
                />
              </form>
              <div className="flex items-center gap-3 mt-5 w-[90%] m-auto">
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
        </div>
      </div>
    </div>
  );
};
