import React from "react";
import { Controller } from "react-hook-form";

export const CheckboxInput = ({
  label,
  name,
  control,
  rules = {},
  ...props
}) => {
  return (
    <div className="flex gap-1">
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <div className="flex gap-1 flex-col">
            <div >
              <input
                type="checkbox"
                {...field}
                {...props}
                className="mr-2"
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
                id={name}
              />
              {label && (
                <label htmlFor={name} className="text-gray-600 font-medium text-sm">{label}</label>
              )}
            </div>
            {fieldState.error && (
              <span className="font-light text-sm text-red-700">
                {fieldState.error.message}
              </span>
            )}
          </div>
        )}
      />
    </div>
  );
};
