function Card(props) {
  let claseCard = "card";

  if (props.destacado) {
    claseCard = "card card-destacada";
  }

  return (
    <div className={claseCard}>
      <div className="card-image-container">
        <img 
          src={props.imagen} 
          alt={props.titulo} 
          className="card-image" 
        />
        <span className="card-status">{props.estado}</span>

        {props.destacado && (
          <span className="badge-destacado">Destacado</span>
        )}
      </div>

      <div className="card-content">
        <span className="card-category">{props.categoria}</span>
        <h3 className="card-title">{props.titulo}</h3>
        <p className="card-description">{props.descripcion}</p>

        <div className="card-footer">
          <span className="card-price">${props.precio}</span>
          <button type="button" className="card-button">Ver Más</button>
        </div>
      </div>
    </div>
  );
}

export default Card;