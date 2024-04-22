import React from "react";
import { useState, useEffect } from "react";

// definig custom hooks
function useFetchTodos() {
  const [todo, setTodos] = useState([]);
  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch("https://sum-server.100xdevs.com/todos");
      const data = await response.json();
      setTodos(data.todos);
    }

    fetchTodos();
  }, []);

  return todo;
}

const CustomHooks = () => {
  const todo = useFetchTodos();
  return (
    <div>
      {todo.map((td) => (
        <div key={td.id} >
            
          {/* Added key prop for optimization */}
          <h1>{td.title}</h1>
          <p>{td.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomHooks;
