import { useEffect, useState } from "react";
import Button from "../components/Button";

const CounterPage = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

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
