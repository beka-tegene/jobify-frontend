import React from "react";
import { useForm } from "react-hook-form";
import { ButtonUi, TextInput } from "../../../Components";
import { useDispatch } from "react-redux";
import { updateAdminRequest, updatePasswordAdminRequest } from "../../../Store/Hook/adminSlice";
import jwt_decode from "jwt-decode";

export const Settings = () => {
  const { control, handleSubmit, watch, setError, clearErrors } = useForm();
  const token = localStorage.getItem("token");
  const decodedToken = jwt_decode(token);
  const dispatch = useDispatch();

  // Watch the newPassword field for validation
  const newPassword = watch("newPassword");
  const confirmPassword = watch("confirmPassword");

  const onSubmit = (data) => {
    dispatch(updateAdminRequest({ id: decodedToken.userId, ...data }));
  };

  const onSubmitPassword = (data) => {
    if (data.newPassword !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match.",
      });
      return;
    }
    dispatch(updatePasswordAdminRequest({ id: decodedToken.userId, ...data }));
  };

  return (
    <div className="px-5 py-6">
      <h1 className="font-medium text-2xl">Admin Settings</h1>
      <p className="font-medium text-gray-400 mb-3">
        Manage your profile and change your password.
      </p>

      {/* Profile Settings */}
      <div className="mb-10 bg-white p-4 rounded-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Profile Settings</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextInput
              label="Full Name"
              name="fullName"
              control={control}
              placeholder="John Doe"
              className="text-black"
            />
            <TextInput
              label="Email Address"
              name="email"
              type="email"
              control={control}
              placeholder="admin@jobify.com"
              className="text-black"
            />
            <TextInput
              label="Phone Number"
              name="phone"
              type="tel"
              control={control}
              placeholder="+1 234 567 890"
              className="text-black"
            />
          </div>
          <div className="flex items-center justify-end">
            <ButtonUi
              label="Save Changes"
              type="submit"
              className="w-2/4 mt-7 bg-[#1EBBD7] border border-[#1EBBD7] py-2 px-7 rounded-md text-white font-semibold hover:bg-transparent hover:text-[#1EBBD7]"
            />
          </div>
        </form>
      </div>

      {/* Change Password Section */}
      <div className="mb-10 bg-white p-4 rounded-md">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Change Password</h2>
        <form onSubmit={handleSubmit(onSubmitPassword)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextInput
              label="Current Password"
              name="oldPassword"
              type="password"
              control={control}
              className="text-black"
              rules={{ required: "Current password is required" }}
            />
            <TextInput
              label="New Password"
              name="newPassword"
              type="password"
              control={control}
              className="text-black"
              rules={{ required: "New password is required" }}
            />
            <TextInput
              label="Confirm New Password"
              name="confirmPassword"
              type="password"
              control={control}
              className="text-black"
              rules={{
                required: "Please confirm your new password",
                validate: value => {
                  return value === newPassword || "Passwords do not match";
                },
              }}
            />
          </div>
          <div className="flex items-center justify-end">
            <ButtonUi
              label="Save Changes"
              type="submit"
              className="w-2/4 mt-7 bg-[#1EBBD7] border border-[#1EBBD7] py-2 px-7 rounded-md text-white font-semibold hover:bg-transparent hover:text-[#1EBBD7]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
