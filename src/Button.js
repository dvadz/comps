import classNames from "classnames";

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
  let classes = classNames(
    // default, always applied
    "border-2 px-3 py-1.5 m-1 flex items-center",
    {
      //  variant
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-600 bg-gray-600 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      // rounded
      "rounded-full": rounded,
      // outline
      "bg-white": outline,
      "text-blue-600": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-600": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-600": outline && danger,
    }
  );

  return (
    <div>
      <button className={classes}>{children}</button>
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
