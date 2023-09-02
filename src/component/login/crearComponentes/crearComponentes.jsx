const CampoTexto = (props) => {
  return (
    <div className="col-lg-12 form">
      <div>
        <label>{props.titulo}</label>
      </div>
      <div>
        <input
          type={props.type}
          placeholder={props.placeholder}
          pattern={props.pattern}
        />
      </div>
    </div>
  );
};
export default CampoTexto;
