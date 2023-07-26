import { useEffect, useState } from "react";
import Button from "../components/Button";

const CounterPage = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={handleClick} primary rounded>
        Increment
      </Button>
    </div>
  );
};

export default CounterPage;
