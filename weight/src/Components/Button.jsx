import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ to, icon, children, onClick, className }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleButtonClick = () => {
    setIsSelected(!isSelected); 
    if (onClick) {
      onClick();
    }
  };

  const defaultClasses = `p-3 mr-5 flex items-left flex-row mb-4 rounded-lg w-full hover:bg-[#6759FF] hover:text-white ${
    isSelected ? "bg-[#6759FF] text-white" : "text-black bg-transparent"
  }`;

  const buttonClasses = `${defaultClasses} ${className}`;

  return (
    <button className={buttonClasses} onClick={handleButtonClick}>
      <FontAwesomeIcon icon={icon} />
      <div className={`ml-4`}>
        <Link to={to}>{children}</Link>
      </div>
    </button>
  );
};

export default Button;
