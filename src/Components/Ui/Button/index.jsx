import React from "react";

export const ButtonUi = ({
  label = "Button",
  onClick,
  type = "button",
  disabled = false,
  className = "",
  icon,
  loading = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={` focus:outline-none focus:ring-2 focus:ring-blue-500 ${className} `}
    >
      <>
        {loading ? (
          "Loading..."
        ) : (
          <div className="flex gap-2 items-center justify-center">
            {icon} {label}
          </div>
        )}
      </>
    </button>
  );
};
