import "./UnderConstruction.css";

export default function UnderConstruction({ title }) {
  return (
    <main className="under-construction">
      <h1>{title}</h1>
      <p>
        Ця сторінка знаходиться в розробці.<br />
        Ми працюємо над нею та скоро запустимо 🚀
      </p>

      <span className="badge">Under construction</span>
    </main>
  );
};