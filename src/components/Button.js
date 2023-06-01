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
  ...rest
}) => {
  let classes = classNames(
    // default, always applied
    "border-2 px-3 py-1.5 m-1 flex items-center",
    {
      //  NOT outline
      "border-blue-500    bg-blue-500   text-white": primary && !outline,
      "border-gray-600    bg-gray-600   text-white": secondary && !outline,
      "border-green-500   bg-green-500  text-white": success && !outline,
      "border-yellow-400  bg-yellow-400 text-white": warning && !outline,
      "border-red-500     bg-red-500    text-white": danger && !outline,
      // outline
      "border-blue-500    text-blue-500": primary && outline,
      "border-gray-600    text-gray-600": secondary && outline,
      "border-green-500   text-green-500": success && outline,
      "border-yellow-400  text-yellow-400": warning && outline,
      "border-red-500     text-red-500": danger && outline,
      // rounded
      "rounded-full": rounded,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
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
