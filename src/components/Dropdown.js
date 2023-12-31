import { useEffect, useRef, useState } from "react";
import { AiOutlineDownCircle, AiOutlineLeftCircle } from "react-icons/ai";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!ref.current) return;

      if (!ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

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
    <div ref={ref} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <div>{value?.label || "Select..."}</div>
        <div className="text-lg">{icon}</div>
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
};

export default Dropdown;
