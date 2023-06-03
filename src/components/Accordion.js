import { useState } from "react";

const Accordion = ({ items }) => {
  const [expandedItem, setExpandedItem] = useState(0);

  const renderedItems = items.map((item, index) => {
    const content = index === expandedItem ? <div>{item.content}</div> : false;
    return (
      <div key={item.id}>
        <div
          onClick={() => {
            setExpandedItem(index);
          }}
        >
          {item.label}
        </div>
        {content}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

export default Accordion;
