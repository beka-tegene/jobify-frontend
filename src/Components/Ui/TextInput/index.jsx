import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; // Import icons for toggling password visibility

export const TextInput = ({
  label,
  type = "text",
  name,
  control,
  rules = {},
  labelClass = "text-gray-600",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-1 w-full relative">
      {label && <label htmlFor={name} className={`${labelClass} font-medium`}>{label}</label>}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <input
              type={type === "password" && showPassword ? "text" : type} // Toggle type based on state
              id={name}
              {...field}
              {...props}
              className="w-full border border-gray-300 p-2 rounded bg-transparent outline-none pr-10" // Add padding-right for the icon
            />
            {type === "password" && (
              <div
                className="absolute right-2 top-2/3 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <AiFillEye size={20} className='text-[#108A58]' /> : <AiFillEyeInvisible size={20} className='text-[#108A58]'/>}
              </div>
            )}
            {fieldState.error && <span className="font-light text-sm text-red-700">{fieldState.error.message}</span>}
          </>
        )}
      />
    </div>
  );
};
