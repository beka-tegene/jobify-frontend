import React from 'react';
import { Controller } from 'react-hook-form';

export const SelectInput = ({
  label,
  name,
  control,
  rules = {},
  options = [],
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={name} className="text-gray-600 font-medium ">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <select
              id={name}
              {...field}
              {...props}
              className="w-full border-[1.5px] border-[#bbc9cc] outline-none px-4 py-2 rounded bg-transparent"
            >
              <option value="" selected disabled>
                Select an option
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {fieldState.error && (
              <span className="font-light text-sm text-red-700">
                {fieldState.error.message}
              </span>
            )}
          </>
        )}
      />
    </div>
  );
};
