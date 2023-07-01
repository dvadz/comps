import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

const Link = ({ to, children }) => {
  const { navigate } = useNavigation();

  const handler = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey) {
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
