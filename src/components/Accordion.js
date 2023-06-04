import { useState } from "react";
import { BiChevronSquare, BiChevronDownSquare } from "react-icons/bi";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
  const [expandedItem, setExpandedItem] = useState(0);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedItem;
    const content = isExpanded ? <div>{item.content}</div> : false;
    const icon = isExpanded ? <GoChevronDown /> : <GoChevronLeft />;

    return (
      <div key={item.id}>
        <div
          onClick={() => {
            setExpandedItem(index);
          }}
          className="flex p-3 bg-gray-50 items-center cursor-pointer justify-between"
        >
          <span>{item.label}</span>
          <span className="text-xl">{icon}</span>
        </div>
        {index === expandedItem ? (
          <div className="border-b border-t p-5">{item.content}</div>
        ) : (
          false
        )}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
