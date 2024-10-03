import React from 'react';
import { Controller } from 'react-hook-form';

export const RangeInput = ({
  label,
  name,
  control,
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 0,
  rules = {},
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={name} className="text-gray-600 font-medium">{label}</label>}
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field, fieldState }) => (
          <>
            <input
              type="range"
              id={name}
              min={min}
              max={max}
              step={step}
              {...field}
              {...props}
              className="w-full bg-transparent"
              style={{ backgroundSize: `${((field.value - min) / (max - min)) * 100}% 100%` }}
            />
            <div className="flex justify-between text-gray-600">
              <span>{min}</span>
              {/* <span>{max}</span> */}
              <span>{field.value}</span>
            </div>
            {fieldState.error && <span className="font-light text-sm text-red-700">{fieldState.error.message}</span>}
          </>
        )}
      />
    </div>
  );
};
