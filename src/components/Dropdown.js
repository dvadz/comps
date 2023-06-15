import { useState } from "react";
import { AiOutlineDownCircle, AiOutlineLeftCircle } from "react-icons/ai";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key={option.value}
        onClick={(event) => {
          handleOptionClick(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const icon = isOpen ? <AiOutlineDownCircle /> : <AiOutlineLeftCircle />;

  return (
    <div className="w-48 relative">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleClick}
      >
        <div>{value?.label || "Select..."}</div>
        <div className="text-lg">{icon}</div>
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p3 shadow bg-white w-full">
          {renderedOptions}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
