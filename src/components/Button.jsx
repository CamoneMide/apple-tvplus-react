import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ children, className, size = "medium" }) => {
  const sizeClassNames = {
    small: "text-xs py-[3px] px-[10px]",
    medium: "text-sm py-3 px-[22px]",
    large: "text-base py-[18px] px-[31px]",
  };

  return (
    <>
      <button
        className={twMerge(
          "bg-white text-textBlack rounded-full",
          sizeClassNames[size],
          className
        )}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
