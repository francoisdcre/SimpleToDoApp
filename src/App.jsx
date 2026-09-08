import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import TodoPage from "./pages/TodoPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/todo/:id" element={<TodoPage />} />
      </Routes>
    </>
  );
}

export default App;
