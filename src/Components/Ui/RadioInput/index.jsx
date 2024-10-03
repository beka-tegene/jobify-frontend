import React from 'react';
import { Controller } from 'react-hook-form';

export const RadioInput = ({
  label,
  name,
  control,
  rules = {},
  options = [],
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-gray-600 font-medium">{label}</label>}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <div className='flex w-full justify-between flex-wrap'>
              {options.map((option) => (
                <label key={option.value} className="text-gray-600 font-medium text-sm">
                  <input
                    type="radio"
                    value={option.value}
                    checked={field.value === option.value}
                    onChange={() => field.onChange(option.value)}
                    {...props}
                    className='mr-2 bg-transparent'
                  />
                  {option.label}
                </label>
              ))}
            </div>
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
