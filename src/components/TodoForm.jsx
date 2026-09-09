function TodoForm({ currentTodoList }) {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Element à ajouter"></input>
        <button>Ajouter</button>
      </form>
    </>
  );
}

export default TodoForm;
