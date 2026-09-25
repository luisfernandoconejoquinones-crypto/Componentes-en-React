
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <button type="button" className="icon-btn">☰</button>
      </div>

      <nav className="sidebar-menu">
        <button type="button" className="icon-btn">⊞</button>
        <button type="button" className="icon-btn">🗂</button>
        <button type="button" className="icon-btn">★</button>
        <button type="button" className="icon-btn active">✦</button>
        <button type="button" className="icon-btn">⚙</button>
      </nav>

      <div className="sidebar-bottom">
        <button type="button" className="icon-btn">👤</button>
      </div>
    </aside>
  );
}

export default Sidebar;