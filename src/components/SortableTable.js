import { useState } from "react";
import Table from "./Table";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

const SortableTable = (props) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const { config, data } = props;

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("des");
      setSortBy(label);
    } else {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedData = [...data];
  const reverseOrder = sortOrder === "asc" ? 1 : -1;

  if (sortBy && sortOrder) {
    const { sortValue } = config.find((column) => column.label === sortBy);

    updatedData.sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      if (typeof valueA === "number") {
        return (valueA - valueB) * reverseOrder;
      } else {
        return valueA.localeCompare(valueB) * reverseOrder;
      }
    });
  }

  const getIcons = (label) => {
    if (label !== sortBy) {
      return (
        <div>
          <BiChevronUp />
          <BiChevronDown />
        </div>
      );
    }

    if (sortOrder === null) {
      return (
        <div>
          <BiChevronUp />
          <BiChevronDown />
        </div>
      );
    } else if (sortOrder === "asc") {
      return (
        <div>
          <BiChevronUp />
        </div>
      );
    } else {
      return (
        <div>
          <BiChevronDown />
        </div>
      );
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)}>
          <div className="flex items-center">
            {getIcons(column.label)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={updatedData} config={updatedConfig} />;
};

export default SortableTable;
