import Table from "../components/Table";

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
  },
  { label: "Color", render: (rowData) => rowData.color },
  { label: "Score", render: (rowData) => rowData.score },
];

const TablePage = () => {
  return <Table data={data} config={config} />;
};

export default TablePage;
