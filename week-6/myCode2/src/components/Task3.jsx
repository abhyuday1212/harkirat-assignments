import { useState, useMemo, useEffect } from "react";
// Use Memo
function Task3() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const count = useMemo(() => {
    console.log("Memo got called");
    let finalCount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalCount = finalCount + i;
    }
    return finalCount;
  }, [inputValue]);

  // Use Memo is for some expensive operstions that need to be computed only if a input value changes, it basically discard the re-renders from other state variables

  //! We can achieve the functionality of useMemo using useEffect also

  //* Method-2

  // const [newCount, setNewCount] = useState(0);
  // useEffect(() => {
  //   console.log("Memo got called");
  //   let finalCount = 0;
  //   for (let i = 1; i <= inputValue; i++) {
  //     finalCount = finalCount + i;
  //   }
  //   setNewCount(finalCount);
  // }, [inputValue]);
    //Assigning the newCount value in place of count
    // Using the useEffect in place of useMemo is expensive

  return (
    <div>
      <input
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
        placeholder={"Find sum from 1 to n"}
      ></input>
      <br />
      Sum from 1 to {inputValue} is {count}
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter ({counter})
      </button>
    </div>
  );
}

export default Task3;
