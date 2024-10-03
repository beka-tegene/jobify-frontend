import React, { useState, useRef } from "react";
import { Controller } from "react-hook-form";
import { FaCloudUploadAlt } from "react-icons/fa";

export const FileInput = ({ label, name, control, rules = {}, ...props }) => {
  const [preview, setPreview] = useState(null);
  const inputRef = useRef(null);

  const handleFileChange = (file) => {
    if (file) {
      setPreview(URL.createObjectURL(file));
      return file;
    }
    return null;
  };

  const handleDrop = (e, field) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      // Update React Hook Form field
      field.onChange(file);
      inputRef.current.files = e.dataTransfer.files;
    }
  };

  return (
    <div
      className="flex flex-col gap-1 h-[250px] w-full"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => handleDrop(e, field)}
    >
      {label && (
        <label htmlFor={name} className="text-gray-600 font-medium">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <div className="flex flex-col items-start h-full w-full overflow-hidden">
            <input
              type="file"
              id={name}
              ref={inputRef}
              {...props}
              onChange={(e) => {
                const file = e.target.files[0];
                field.onChange(handleFileChange(file));
              }}
              className="hidden"
            />
            <div
              className="overflow-hidden border-[3px] border-dotted h-full w-full p-4 border-gray-400 rounded-lg flex flex-col items-center justify-center"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, field)}
            >
              {!preview && (
                <>
                  <FaCloudUploadAlt size={50} className="text-gray-300" />
                  <p className="font-semibold text-gray-400 text-center">
                    Drag & Drop to Upload File
                  </p>
                  <span className="text-sm text-gray-400">or</span>
                  <button
                    type="button"
                    onClick={() => inputRef.current.click()}
                    className="bg-[#90CDF4] text-white py-2 px-8 rounded"
                  >
                    Browse
                  </button>
                </>
              )}
              {preview && (
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
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
