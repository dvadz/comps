import SortableTable from "../components/SortableTable";

const data = [
  { name: "orange", color: "bg-orange-500", score: 4 },
  { name: "banana", color: "bg-yellow-500", score: 1 },
  { name: "lime", color: "bg-green-500", score: 5 },
  { name: "apple", color: "bg-red-500", score: 3 },
];

const config = [
  {
    label: "Name",
    render: (rowData) => rowData.name,
    sortValue: (fruit) => fruit.name,
  },
  {
    label: "Color",
    render: (rowData) => <div className={` p-3 m-2 ${rowData.color}`}></div>,
  },
  {
    label: "Score",
    render: (rowData) => rowData.score,
    sortValue: (fruit) => fruit.score,
  },
];

const keyFn = (fruit) => {
  return fruit.name;
};

const TablePage = () => {
  return <SortableTable data={data} config={config} keyFn={keyFn} />;
};

export default TablePage;
