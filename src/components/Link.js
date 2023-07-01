import { useContext } from "react";
import NavigationContext from "../context/navigation";
import classNames from "classnames";

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

  const classes = classNames("text-blue-500");
  return (
    <a href={to} onClick={handler} className={classes}>
      {children}
    </a>
  );
};

export default Link;
