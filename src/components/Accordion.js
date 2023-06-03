import { useState } from "react";
import { BiChevronSquare, BiChevronDownSquare } from "react-icons/bi";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
  const [expandedItem, setExpandedItem] = useState(0);

  const renderedItems = items.map((item, index) => {
    const content = index === expandedItem ? <div>{item.content}</div> : false;
    const icon = index === expandedItem ? <GoChevronDown /> : <GoChevronLeft />;
    return (
      <div key={item.id}>
        <div
          onClick={() => {
            setExpandedItem(index);
          }}
        >
          <span>{item.label}</span>
          <span>{icon}</span>
        </div>
        {content}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

export default Accordion;
