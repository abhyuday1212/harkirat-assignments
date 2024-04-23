import React from "react";
import { useState } from "react";

const PropDrilling = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count propCount={count} propSetCount={setCount} />
    </div>
  );
};

function Count({ propCount, propSetCount }) {
  return (
    <div>
      {propCount}
      <Button newPropCount={propCount} newPropSetCount={propSetCount} />
    </div>
  );
}

function Button({newPropCount, newPropSetCount}) {
  return (
    <div>
      <button
        onClick={() => {
          newPropSetCount(newPropCount + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          newPropSetCount(newPropCount - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default PropDrilling;
