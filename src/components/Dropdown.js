import { useState } from "react";

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderedOptions = options.map((option) => {
    return <div key={option.value}>{option.label}</div>;
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
