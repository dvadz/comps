import { useState } from "react";

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} onClick={handleOptionClick}>
        {option.label}
      </div>
    );
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div on onClick={handleClick}>
        Select...
      </div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
};

export default Dropdown;
