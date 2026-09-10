import { useState } from "react";

function TodoForm({ currentTodo }) {
  const [task, setTask] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Element à ajouter"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        ></input>
        <button type="submit">Ajouter</button>
      </form>
    </>
  );
}

export default TodoForm;
