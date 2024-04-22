import React, { useState, useCallback } from "react";
import { memo } from "react";

const Task4 = () => {
  const [count, setCount] = useState(0);

  // ! if "randomFunction" is a variable thaan the child will not get re-rendered.
  //   let randomFunction = 0;

  // *  function randomFunction() {
  //     console.log("I am random function, If I am passed inside the component as a prop than i will make the child to re-render again, no matter i am being changed or not.");
  //   }

    // ! Using a useCallback will not cause re-renders till the dependency array variable is unchanged, it will consider the function as nothing has changed.
    //* Memorize a function
  const randomFunction = useCallback(() => {
    console.log("Inside a useCallback function");
  }, []);

  console.log("Parent re-renders");
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Counter {count}
      </button>
      <Child innerFunction={randomFunction} />
    </div>
  );
};

const Child = memo(({ innerFunction }) => {
  console.log("Child Re-renders");
  return (
    <div>
      <p>
        I am a Child Component, I get Re-Rendered if the parent renders, So to
        stop rendering due to parent Component Re-Rendering , thus memo has been
        used. {`\n`}
      </p>
      <p>
        When a function,object is just paased from the parent component after
        using memo also the child component get rendered, The react is not smart
        enough to know that the function has not changed when the parent
        component rerendered.
      </p>
    </div>
  );
});

export default Task4;
