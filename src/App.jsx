import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import TodoPage from "./pages/TodoPage.jsx";
import { useState, useEffect } from "react";

function App() {
  const [TodoList, setTodoList] = useState(() => {
    const savedTodoLists = localStorage.getItem("TodoLists");

    if (savedTodoLists) {
      return JSON.parse(savedTodoLists);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("TodoLists", JSON.stringify(TodoList));
  }, [TodoList]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage TodoList={TodoList} setTodoList={setTodoList} />
          }
        />
        <Route
          path="/todo/:id"
          element={<TodoPage TodoList={TodoList} setTodoList={setTodoList} />}
        />
      </Routes>
    </>
  );
}

export default App;
