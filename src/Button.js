import PropTypes from "prop-types";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
};

Button.propTypes = {
  checkType: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1)
      return new Error(
        "Only one of these options can be true: primary, secondary, success, warning, danger"
      );
  },
};

export default Button;
