import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// * Method: 1
/*
function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <button onClick={increaseCount}>count is {count}</button>
    </>
  );
}
*/

// * Method: 2

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <CustomButton count={count} setCount={setCount}></CustomButton>
//       <CustomButton count={count-1} setCount={setCount-1}></CustomButton>
//       <CustomButton count={count*2} setCount={setCount*2}></CustomButton>
//       <CustomButton count={count/2} setCount={setCount/2}></CustomButton>
//     </div>
//   );
// }

//* Component : 1

// function CustomButton(props) {

//   function onClickHandler() {
//     console.log(props);
//     props.setCount( props.count + 1);
//   }

//   return <button onClick={onClickHandler}>
//     Counter {props.count}
//   </button>;
// }

//* Todo app

function App() {
  const [todos, setTodos] = useState([
    {
      title: "My first todo",
      description: "This is a test todo",
      status: false,
      createdDate: new Date(),
    },
    {
      title: "My 2nd todo",
      description: "This is a test todo",
      status: true,
      createdDate: new Date(),
    },
    {
      title: "My 3rd todo",
      description: "This is a test todo",
      status: true, 
    },
  ]);

  function addTodo() {
    /* 
    ...todos -> spread the current value and on the comma value for example,
    If its a todo in which data is there already,
    
    setTodo(...todos,4) => 1,2,3,4
    */
    setTodos([...todos, {
      title: "new Todo added",
      description:"desc of the new Todo"
    }])
  }


  return (
    <div>
      <button onClick={addTodo}>Add Random Todos</button>
      {todos.map(function (todo) {
        return (
          <Todo
            //props
            title={todo.title}
            description={todo.description}
            status={todo.status} 
          />
        );
      })}
    </div>
  );
}


function Todo(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <h1>{props.status}</h1> 
      <br />
    </div>
  );
}

export default App;
