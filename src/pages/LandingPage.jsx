import { useState } from "react";
import { SquarePen } from "lucide-react";

function LandingPage() {
  const [todoCard, setTodoCard] = useState([]);

  function addTodoCard() {
    setTodoCard([
      ...todoCard,
      {
        id: crypto.randomUUID(),
        nom: "Nouvelle Liste",
      },
    ]);
  }

  function deleteTodoCard(idToDelete) {
    const newTodoCard = todoCard.filter(
      (todoCard) => todoCard.id !== idToDelete,
    );
    setTodoCard(newTodoCard);
  }

  function updateTodoName(idToUpdate, newName) {
    const updatedCards = todoCard.map((card) => {
      if (card.id === idToUpdate) {
        return {
          ...card,
          nom: newName,
        };
      }

      return card;
    });

    setTodoCard(updatedCards);
  }

  return (
    <>
      <main className="relative flex min-h-[500px] items-center justify-center overflow-hidden bg-[var(--bg-secondary)] px-6">
        {/* Halos de fond */}
        <div className="absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-[var(--accent-purple)] opacity-20 blur-[120px]" />

        <div className="absolute bottom-[10%] right-[10%] h-72 w-72 rounded-full bg-[var(--accent-cyan)] opacity-15 blur-[120px]" />

        <section className="relative z-10 flex w-full max-w-6xl flex-col items-center justify-arround gap-16 md:flex-row">
          {/* Texte */}
          <div className="flex max-w-xl flex-col items-center gap-5 text-center md:items-start md:text-left">
            <h1
              className="
          bg-gradient-to-r
          from-[var(--accent-purple)]
          via-[var(--accent-blue)]
          to-[var(--accent-cyan)]
          bg-clip-text
          text-5xl
          font-bold
          text-transparent
          drop-shadow-[0_0_20px_rgba(59,130,246,0.25)]
          md:text-6xl
        "
            >
              Simple To-Do App
            </h1>

            <p className="max-w-md text-lg text-[var(--text-secondary)]">
              A simple to-do app built with React and Tailwind CSS.
            </p>
          </div>

          {/* Preview Todo */}
          <div className="relative w-full max-w-sm">
            <div
              className="
          absolute
          inset-0
          rounded-[2rem]
          bg-gradient-to-br
          from-[var(--accent-purple)]
          to-[var(--accent-cyan)]
          opacity-20
          blur-2xl
        "
            />

            <div
              className="
          relative
          rounded-[2rem]
          border
          border-white/15
          bg-gradient-to-br
          from-white/10
          via-white/5
          to-white/[0.02]
          p-6
          shadow-[0_20px_70px_rgba(0,0,0,0.5)]
          backdrop-blur-2xl
        "
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-[var(--text-muted)]">My list</p>

                  <h2 className="text-2xl font-semibold">Today</h2>
                </div>

                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-[var(--text-secondary)]">
                  3 tasks
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                  <div className="h-4 w-4 rounded-full border border-white/30" />
                  <span>Learn React</span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                  <div className="h-4 w-4 rounded-full border border-white/30" />
                  <span>Build Todo components</span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 opacity-50">
                  <div className="h-4 w-4 rounded-full bg-[var(--success)]" />

                  <span className="line-through">Setup Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="flex min-h-[500px] items-center flex-col p-5 gap-16">
        <h1
          className="text-5xl
          font-bold"
        >
          Toutes vos listes
        </h1>
        <div className="flex flex-row gap-10 w-full flex-wrap">
          {todoCard.map((todoCard) => (
            <article
              key={todoCard.id}
              className="
      group
      relative
      w-[280px]
      min-h-[180px]
      overflow-hidden
      rounded-3xl
      border border-white/15
      bg-white/[0.04]
      p-6
      backdrop-blur-2xl
      shadow-[0_20px_60px_rgba(0,0,0,0.45)]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-white/25
      hover:bg-white/[0.07]
    "
            >
              {/* Reflet / lumière interne */}
              <div
                className="
        pointer-events-none
        absolute
        inset-0
        bg-gradient-to-br
        from-white/20
        via-white/[0.03]
        to-transparent
        opacity-60
      "
              />

              {/* Glow coloré */}
              <div
                className="
        pointer-events-none
        absolute
        -right-10
        -top-10
        h-32
        w-32
        rounded-full
        bg-[var(--accent-purple)]
        opacity-15
        blur-3xl
      "
              />

              {/* Contenu */}
              <div className="relative z-10 flex h-full flex-col justify-between gap-10">
                <div>
                  <p className="mb-2 text-sm text-[var(--text-muted)]">
                    Todo list
                  </p>
                  <input
                    type="text"
                    placeholder="Nom de la liste"
                    value={todoCard.nom}
                    onChange={(e) =>
                      updateTodoName(todoCard.id, e.target.value)
                    }
                    onBlur={(e) => {
                      e.target.scrollLeft = 0;
                    }}
                    className="
                      w-full
                      truncate
                      rounded-lg
                      border border-transparent
                      transition-all duration-200
                      hover:border-white/10
                      hover:bg-white/5
                      focus:border-white/20
                      focus:bg-white/10
                    "
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    className="
                      rounded-xl
                      border border-white/10
                      bg-white/[0.06]
                      px-4 py-2
                      text-sm
                      backdrop-blur-xl
                      transition
                      hover:bg-white/10
                    "
                  >
                    Ouvrir
                  </button>

                  <button
                    onClick={() => deleteTodoCard(todoCard.id)}
                    className="
            rounded-xl
            px-3 py-2
            text-sm
            text-[var(--danger)]
            transition
            hover:bg-red-500/10
          "
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </article>
          ))}
          <button
            onClick={addTodoCard}
            className="
    flex
    h-[180px]
    w-[280px]
    items-center
    justify-center
    rounded-3xl
    border
    border-white/10
    bg-white/[0.03]
    text-6xl
    text-white/40
    backdrop-blur-xl
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-white/20
    hover:bg-white/[0.06]
    hover:text-white/70
  "
          >
            +
          </button>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
