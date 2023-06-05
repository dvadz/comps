import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
  const [expandedItem, setExpandedItem] = useState(-1);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedItem;
    const icon = isExpanded ? <GoChevronDown /> : <GoChevronLeft />;
    const content = isExpanded ? (
      <div className="border-b border-t p-5">{item.content}</div>
    ) : (
      false
    );

    return (
      <div key={item.id}>
        <div
          onClick={() => {
            if (index === expandedItem) setExpandedItem(-1);
            else setExpandedItem(index);
          }}
          className="flex p-3 bg-gray-50 items-center cursor-pointer justify-between"
        >
          <span>{item.label}</span>
          <span className="text-xl">{icon}</span>
        </div>
        {content}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
