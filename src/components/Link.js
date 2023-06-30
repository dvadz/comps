import { useContext } from "react";
import NavigationContext from "../context/navigation";

const Link = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext);

  const handler = (event) => {
    event.preventDefault();
    navigate(to);
  };

  return <a onClick={handler}>{children}</a>;
};

export default Link;
