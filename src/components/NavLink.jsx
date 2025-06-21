export default function NavLink({ children, className, active, onClick }) {
  return (
    <button
      className={[className, 'nav__link', active && 'nav__link--active'].filter((l) => l).join(' ')}
      onClick={onClick}
    >
      { children }
    </button>
  );
}
