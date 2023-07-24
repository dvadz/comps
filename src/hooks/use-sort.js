import { useState } from "react";

const useSort = (data, config) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

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

  const sortedData = [...data];
  const reverseOrder = sortOrder === "asc" ? 1 : -1;

  if (sortBy && sortOrder) {
    const { sortValue } = config.find((column) => column.label === sortBy);

    sortedData.sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      if (typeof valueA === "number") {
        return (valueA - valueB) * reverseOrder;
      } else {
        return valueA.localeCompare(valueB) * reverseOrder;
      }
    });
  }

  return { sortOrder, sortBy, sortedData, handleClick };
};

export default useSort;
