import React, { useContext,useState } from "react";
import { MyCountContext } from "../Context";

const ContextApi = () => {
  const [count, setCount] = useState(0);
  // Wrap anyone that wants to use the teleported value inside a provider

  return (
    <div>
      <MyCountContext.Provider value={count}>
        <Count propSetCount={setCount} />
      </MyCountContext.Provider>
    </div>
  );
};

function Count({ propSetCount }) {
  return (
    <div>
      <CountRenderer />
      <Button newPropSetCount={propSetCount} />
    </div>
  );
}

function CountRenderer() {
  const renderCount = useContext(MyCountContext);

  return <div>{renderCount}</div>;
}

function Button({ newPropSetCount }) {
  const renderCount = useContext(MyCountContext);
    
  return (
    <div>
      <button
        onClick={() => {
          newPropSetCount(renderCount + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          newPropSetCount(renderCount - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default ContextApi;
