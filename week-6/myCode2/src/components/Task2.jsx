import { useState } from "react";
import { useEffect } from "react";
/**
Write a component that takes a todo id as an input And fetches the data for that todo from the given endpoint And then renders it How would the dependency array change? https://sum-server.100xdevs.com/todo?id=1

 */
function Task2() {
  const [btnVal, setbtnVal] = useState(1);
  console.log("btnVal: ", btnVal);

  return (
    <div>
      <button
        onClick={function () {
          setbtnVal(1);
        }}
      >
        Todo 1
      </button>
      <button
        onClick={function () {
          setbtnVal(2);
        }}
      >
        Todo 2
      </button>
      <button
        onClick={function () {
          setbtnVal(3);
        }}
      >
        Todo 3
      </button>
      <button
        onClick={function () {
          setbtnVal(4);
        }}
      >
        Todo 4
      </button>
      <button
        onClick={() => {
          setbtnVal(5);
        }}
      >
        Todo 5
      </button>
      <Todo id={btnVal} />
    </div>
  );
}

function Todo({ id }) {
  console.log("id: ", id);
  const [currentId, setCurrentId] = useState();

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
  }, [id]);

  return (
    <div>
      Id: {id}
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  );
}

export default Task2;
