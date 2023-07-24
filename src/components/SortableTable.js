import Table from "./Table";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import useSort from "../hooks/use-sort";

const SortableTable = (props) => {
  const { config, data } = props;

  const { sortOrder, sortBy, sortedData, handleClick } = useSort(data, config);

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
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
};

export default SortableTable;
