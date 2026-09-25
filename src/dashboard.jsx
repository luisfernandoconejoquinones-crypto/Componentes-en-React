import Card from './card';

function Dashboard() {
  return (
    <main className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">UI Design Services</h1>
        <div className="search-box">
          <input type="text" placeholder="Buscar..." className="search-input" />
        </div>
      </header>

      <div className="filter-buttons">
        <button type="button" className="filter-btn active">Todos</button>
        <button type="button" className="filter-btn">Diseño</button>
        <button type="button" className="filter-btn">Desarrollo</button>
        <button type="button" className="filter-btn">Sistemas</button>
      </div>

      <div className="cards-grid">
        <Card
          titulo="Diseño Web UI/UX"
          descripcion="Interfaces modernas e interactivas"
          categoria="Diseño"
          imagen="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&q=80"
          precio="250,000"
          estado="Disponible"
        />
        <Card
          titulo="Diseño Web UI/UX"
          descripcion="Interfaces modernas e interactivas"
          categoria="Diseño"
          imagen="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&q=80"
          precio="250,000"
          estado="Disponible"
          destacado={true}
/>
        <Card
          titulo="Marketing Digital"
          descripcion="Estrategias de posicionamiento SEO"
          categoria="Ventas"
          imagen="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80"
          precio="180,000"
          estado="Disponible"
        />
        <Card
          titulo="Auditoría de Software"
          descripcion="Revisión de calidad de código"
          categoria="Sistemas"
          imagen="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80"
          precio="320,000"
          estado="Agotado"
        />
        <Card
          titulo="Gestión de BD"
          descripcion="Optimización de bases de datos"
          categoria="Sistemas"
          imagen="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&q=80"
          precio="290,000"
          estado="Disponible"
        />
        <Card
          titulo="Branding Corporativo"
          descripcion="Identidad e imagen de marca"
          categoria="Diseño"
          imagen="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=500&q=80"
          precio="380,000"
          estado="Disponible"
        />
      </div>
    </main>
  );
}

export default Dashboard;