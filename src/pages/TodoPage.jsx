import { useParams } from "react-router-dom";

function TodoPage({ todoCard, setTodoCard }) {
  const { id } = useParams();

  console.log("id URL :", id);
  console.log("todoCard :", todoCard);

  const currentTodo = todoCard.find((card) => card.id === id);

  console.log("currentTodo :", currentTodo);

  return (
    <>
      <h1>{currentTodo?.nom}</h1>
    </>
  );
}

export default TodoPage;
