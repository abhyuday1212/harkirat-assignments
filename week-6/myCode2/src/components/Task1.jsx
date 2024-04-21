import { useState } from "react";
import { useEffect } from "react";
/**
Write a component that takes a todo id as an input And fetches the data for that todo from the given endpoint And then renders it How would the dependency array change? https://sum-server.100xdevs.com/todo?id=1

 */
function Task1() {
  return (
    <div>
      <Todo id={1} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch(
        "https://sum-server.100xdevs.com/todo?id=" + id
      );
      const data = await response.json();
      setTodo(data.todo);
    }

    fetchTodos();
  }, []);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  );
}

export default Task1;
