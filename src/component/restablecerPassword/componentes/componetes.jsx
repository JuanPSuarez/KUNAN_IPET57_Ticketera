const Componentes = (props) => {
  return (
    <div>
      <div className=" col-lg-12 mt-3 ">
        <label name={props.name}>{props.titulo}</label>
      </div>
      <div className=" col-lg-12 ">
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};
export default Componentes;
