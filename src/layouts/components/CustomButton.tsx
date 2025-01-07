import React from "react";

const CustomButton = ({
  label,
  link,
  variant,
  className,
}: {
  label: any;
  link: any;
  variant?: any | undefined;
  className?: any | undefined;
}) => {
  return (
    <a
      href={link}
      className={`relative w-full btn ${className} ${variant === "primary" ? "btn-secondary" : "btn-primary"} text-center overflow-hidden group`}
    >
      <span className="relative z-10"> {label}</span>
      <div
        className={`absolute w-16 h-16 -left-16 -bottom-10 border-none rounded-full ${variant === "primary" ? "bg-light" : "bg-dark"} transition-all duration-[500ms] ease-in-out group-hover:w-[500%] group-hover:h-[500%]`}
      ></div>
    </a>
  );
};

export default CustomButton;
