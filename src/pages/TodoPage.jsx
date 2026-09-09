import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import TodoForm from "../components/TodoForm.jsx";
// import TodoItem from "../components/TodoItem.jsx";

function TodoPage({ TodoList }) {
  const { id } = useParams();

  const currentTodo = TodoList.find((card) => card.id === id);

  return (
    <main className="min-h-screen bg-[var(--bg-secondary)]">
      <header className="border-b border-white/10 bg-white/[0.03] px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center">
          <Link
            to="/"
            className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition-all duration-200 hover:-translate-x-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
            />
            Retour à l'accueil
          </Link>
        </div>
      </header>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12">
        <div>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Ma liste
          </p>
          <h1 className="bg-gradient-to-r from-[var(--accent-purple)] via-[var(--accent-blue)] to-[var(--accent-cyan)] bg-clip-text text-4xl font-bold leading-tight text-transparent drop-shadow-[0_0_20px_rgba(59,130,246,0.25)] sm:text-5xl">
            {currentTodo?.nom ?? "Liste introuvable"}
          </h1>
        </div>

        <TodoForm currentTodo={currentTodo} />
      </section>
    </main>
  );
}

export default TodoPage;
