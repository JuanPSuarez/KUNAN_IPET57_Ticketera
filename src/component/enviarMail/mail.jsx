import React, { Component } from "react";
import "./mail.css";


class enviarmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailError: "",
    };
  }

  

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  validarEmail = () => {
    const { email } = this.state;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email) {
      this.setState({ emailError: "El campo de correo electrónico es obligatorio." });
    } else if (!emailRegex.test(email)) {
      this.setState({ emailError: "Por favor, ingrese un correo electrónico válido." });
    } else {
      this.setState({ emailError: "" });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.validarEmail();

  };

  render() {
    const { email, emailError } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
        <img
            src="../public/Logo Kunan Vertical 1.png"
            alt="img kunan"
            className="img"
        />
        <div className="col-lg-12 p3">
            <div className="col-lg-12 p3">
                <span className="title ">
                Revisa y gestiona tu inventario de Activos tecnológicos
            </span>
            </div>
        </div>
        </div>
        <div className="col-lg-12 mt-3 form">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            onBlur={this.validarEmail}
            
          />
          {emailError && <div className="error">{emailError}</div>}
        </div>

        <div>
          <button type="submit" className="btn btn-primary  mt-3">Enviar</button>
        </div>
      </form>
    );
  }
}

export default enviarmail;
