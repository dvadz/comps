import { useContext } from "react";
import NavigationContext from "../context/navigation";

const Link = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext);

  const handler = (event) => {
    console.log(event);
    if (event.metaKey || event.ctrlKey || event.shiftKey) {
      console.log("Command");
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handler}>
      {children}
    </a>
  );
};

export default Link;
