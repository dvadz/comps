import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: "sdsge",
      show: false,
      label: "What is react?",
      content: "You know... it is what it is",
    },
    {
      id: "wiotf",
      show: false,
      label: "Statement #2?",
      content: "Look it up on google. You know what to do!",
    },
    {
      id: "lnvjf",
      show: false,
      label: "Roses are red, violets are blue",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, dolore.",
    },
  ];
  return <Accordion items={items} />;
};

export default AccordionPage;
