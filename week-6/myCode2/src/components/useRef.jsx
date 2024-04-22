import { useCallback, useEffect, useRef, useState } from "react";
// ! define a variable and initiallise the useRef function now simply change the value by divRef.current.innerHTML to rechange its value.

function RefHook() {
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = "10";
    }, 2000);
  }, []);

  const incomeTax = 40000;

  return (
    <div>
      hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  );
}

export default RefHook;
