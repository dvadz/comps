import Button from "../components/Button";
import useCounter from "../hooks/use-count";

const CounterPage = ({ initialCount = 0 }) => {
  const { count, increment } = useCounter(initialCount);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={increment} primary rounded>
        Increment
      </Button>
    </div>
  );
};

export default CounterPage;
