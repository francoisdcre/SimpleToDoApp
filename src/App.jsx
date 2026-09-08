import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import TodoPage from "./pages/TodoPage.jsx";
import { useState, useEffect } from "react";

function App() {
  const [todoCard, setTodoCard] = useState(() => {
    const savedTodoCards = localStorage.getItem("todoCards");

    if (savedTodoCards) {
      return JSON.parse(savedTodoCards);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("todoCards", JSON.stringify(todoCard));
  }, [todoCard]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage todoCard={todoCard} setTodoCard={setTodoCard} />
          }
        />
        <Route
          path="/todo/:id"
          element={<TodoPage todoCard={todoCard} setTodoCard={setTodoCard} />}
        />
      </Routes>
    </>
  );
}

export default App;
