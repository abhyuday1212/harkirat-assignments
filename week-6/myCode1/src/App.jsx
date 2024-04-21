import React from "react";
import { useState } from "react";
import { memo } from "react";

/*
const App = () => {
  return (
    <div>
      <h1>hellow</h1>
      <CustomComponent />
      <h1>Alpha</h1>
      <h1>Beta</h1>
      <h1>Gamma</h1>
      <h1>Delta</h1>
    </div>
  );
};

function CustomComponent() {
  const [title, setTitle] = useState("My name is Abhyuday");
  function handleBtnClick() {
    setTitle("My Name is " + Math.floor(Math.random() * 100))
  }
  return (
    <>
      <button onClick={handleBtnClick}>Click Me</button>
      <h1> {title}</h1>
    </>
  );
}

export default App;

*/

//  Use Memo

/*


function App() {
  const [firstTitle, setFirstTitle] = useState("my name is harkirat");

  function changeTitle() {
    setFirstTitle("My name is " + Math.random());
  }

  return (
    <div>
      <button onClick={changeTitle}>Click me to change the title</button>
      <Header title={firstTitle} />
      <br />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
    </div>
  );
}

const Header = memo(function ({ title }) {
  return <div>{title}</div>;
});

export default App;

*/

// ! For Rendering multiple Componet using Wrapper Class format, but this Method is not used nowadays

// function App() {

//   return (
//     <>
//       {/* Passing component as a prop */}
//       <CardWrapper innerComponent={<TextComponent1 />} />
//       <CardWrapper innerComponent={<TextComponent2 />} />
//       <CardWrapper innerComponent={<TextComponent3 />} />
//       <CardWrapper innerComponent={<TextComponent4 />} />
//     </>
//   );
// }

// function CardWrapper({ innerComponent }) {
//   // inside the div renders the prop

//   return (
//     <div
//       style={{
//         border: "2px solid black",
//         padding: "2px",
//       }}
//     >
//       {innerComponent}
//     </div>
//   );
// }

// function TextComponent1() {
//   return <div>hi there this is Abhyuday 1 </div>;
// }

// function TextComponent2() {
//   return <div>hi there this is Abhyuday 2 </div>;
// }

// function TextComponent3() {
//   return <div>hi there this is Abhyuday 3 </div>;
// }

// function TextComponent4() {
//   return <div>hi there this is Abhyuday 4 </div>;
// }

// * Used Method

function App() {
  return (
    <div>
      <CardWrapper>
        <div>Component 1</div>
        <div>Component 2</div>
        <div>Component 3</div>
        <div>Component 4</div>
      </CardWrapper>
    </div>
  );
}
function CardWrapper({ children }) {
  // * Whatever written inside the CardWrapper Component will act as the children
  // inside the div renders the prop

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "2px",
      }}
    >
      {children}
    </div>
  );
}

export default App;
