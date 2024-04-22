import { useState, useCallback, memo } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
  const [count, setCount] = useState(0);

  // Your code starts here
  const handleIncrement = useCallback(() => {
    //   Two methods to change the value of setCount
    //! M-1
    // setCount(count)
    // In this the count state depends on the state variable count.
    // -----------------------------------
    //! M-2
    // Using this Method the count variable no longer depends on the state variable as it takes any parameter and increase it by 1
    setCount((currentCount) => currentCount + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount(function (currentCount) {
      return currentCount - 1;
    });
  }, []);

  // Your code ends here

  return (
    <div>
      <p>Count: {count}</p>
      <CounterButtons
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

const CounterButtons = memo(({ onIncrement, onDecrement }) => {
  // console.log("Child renderedx");
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
});
