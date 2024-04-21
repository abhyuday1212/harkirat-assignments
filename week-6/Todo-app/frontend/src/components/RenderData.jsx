import React from "react";
import { useEffect, useState } from "react";
// This component can render Array of objects
 
const RenderData = () => {
 const [dbTodo, setDbTodo] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:8000/todos");
      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }
      const data = await response.json();
      setDbTodo(data.foundTodos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();

    // const intervalId = setInterval(fetchTodos, 5000);

    // Clear interval on component unmount to prevent memory leaks
    // This line ensures that when the component is removed from the screen, any scheduled tasks like fetching data at regular intervals are stopped.
    // return () => clearInterval(intervalId);
  }, []);
   
  /**
   * Object destrcuturing : {todos}
   * With this we can directly access the todos, other wise
   * 
   * !Method: 2
   const RenderData = (props) =>{
   {props.todos}
   }
   */
  return (
    <div>
      {dbTodo.map((todo) => (
        <div
          key={todo._id}
          style={{
            border: "1px solid black",
            padding: "5px",
            margin: "2px",
          }}
        >
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button>{todo.completed ? "Complete" : "Mark as Completed✅"}</button>
        </div>
      ))}
    </div>
  );
};

export default RenderData;
