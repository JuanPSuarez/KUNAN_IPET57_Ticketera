const Card = (props) => {
  return (
    <div className="col-lg-2 disponible">
      <h2>{props.titulo}</h2>
      <div></div>
      <h4>{props.subTitulo}</h4>
    </div>
  );
};

export default Card;
