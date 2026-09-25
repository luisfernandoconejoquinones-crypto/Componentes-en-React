function PanelDerech() {
  return (
    <aside className="right-panel">
      <div className="right-panel-card">
        <img 
          src="https://picsum.photos/300/260?random=10" 
          alt="Servicio destacado" 
          className="right-panel-img"
        />
      </div>

      <div className="panel-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

      <div className="panel-info">
        <h3 className="panel-title">UI Design Systems</h3>
        <p className="panel-subtitle">Diseño Web & Móvil</p>

        <div className="rating-stars">
          <span>★</span><span>★</span><span>★</span><span>★</span><span className="star-off">★</span>
          <span className="rating-text">(4.8)</span>
        </div>

        <p className="panel-description">
          Creación de componentes adaptables, librerías de diseño escalables y maquetación profesional para plataformas web.
        </p>
      </div>

      <div className="panel-action">
        <button type="button" className="action-btn">Contratar Servicio</button>
      </div>
    </aside>
  );
}

export default PanelDerech;