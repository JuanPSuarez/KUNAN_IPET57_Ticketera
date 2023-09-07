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
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default CampoTexto;
