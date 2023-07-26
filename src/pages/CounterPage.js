import { useState } from "react";
import Button from "../components/Button";

const CounterPage = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>Count: {count}</div>
      <Button onClick={handleClick} primary rounded>
        Increment
      </Button>
    </div>
  );
};

export default CounterPage;
