import { useState } from "react";

const Accordion = ({ items }) => {
  const [expandedItem, setExpandedItem] = useState(0);

  const renderedItems = items.map((item, index) => {
    return (
      <div key={item.id}>
        <div
          onClick={() => {
            setExpandedItem(index);
          }}
        >
          {item.label}
        </div>
        <div>{item.content}</div>
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

export default Accordion;
