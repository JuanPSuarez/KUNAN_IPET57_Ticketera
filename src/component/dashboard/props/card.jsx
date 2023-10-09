const Card = (props) => {
  return (
    <div className="col-lg-4 disponible">
      <h2>{props.titulo}</h2>
      <div></div>
      <h4>{props.subTitulo}</h4>
    </div>
  );
};

const Barra = (props) => {
  return(
    <div className=""> </div>
  );
}

export default Card;

