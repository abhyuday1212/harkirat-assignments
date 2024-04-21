import React, { useState } from "react";

const CreateTodo = () => {
  //Create Post logic here
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handlePostLogic() {
    const url = "http://localhost:8000/todo";
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div>
      <input
        type="text"
        name="title"
        onChange={function (e) {
          setTitle(e.target.value);
        }}
        placeholder="Enter title"
        style={{
          padding: "10px",
          margin: "10px",
        }}
      />
      <input
        type="text"
        name="Description"
        placeholder="Enter Decription"
        onChange={function (e) {
          setDescription(e.target.value);
        }}
        style={{
          padding: "10px",
          margin: "10px",
        }}
      />

      <button
        onClick={handlePostLogic}
        style={{ margin: "10px", padding: "10px" }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default CreateTodo;
