import React from "react";
import "../Css/inscripcion.css";
import { useState } from "react";

const Inscripcion = () => {
  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    nacimiento: "",
    direccion: "",
    telefono: "",
    email: "",
    cuadro: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleForm = (event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <div className="wrapper">
        <h1>Inscribite aca!</h1>
      <br />
        <h2>
          Completa el siguiente formulario para ser parte de esta Fuerza
          Especial
        </h2>
      <form onSubmit={handleForm} className="body">
        <div className="input-box">
          <div className="form">
            <label htmlFor="nombre">Nombres: </label>
            <input
              type="text"
              name="nombre"
              value={values.nombre}
              onChange={handleInputChange}
            />
          </div>
          <div className="form">
            <label htmlFor="apellido">Apellidos: </label>
            <input
              type="text"
              name="apellido"
              value={values.apellido}
              onChange={handleInputChange}
            />
          </div>
          <div className="form">
            <label htmlFor="dni">DNI: </label>
            <input
              type="text"
              name="dni"
              value={values.dni}
              onChange={handleInputChange}
            />
          </div>
          <div className="form">
            <label htmlFor="nacimiento">Fecha de nacimiento: </label>
            <input
              type="date"
              name="nacimiento"
              value={values.nacimiento}
              onChange={handleInputChange}
            />
          </div>
          <div className="form">
            <label htmlFor="domicilio">Dirección: </label>
            <input
              type="text"
              name="direccion"
              value={values.direccion}
              onChange={handleInputChange}
            />
          </div>
          <div className="form">
            <label htmlFor="telefono">Número de contacto: </label>
            <input
              type="tel"
              name="telefono"
              value={values.telefono}
              onChange={handleInputChange}
            />
          </div>
          <div className="form">
            <label htmlFor="email">E-mail: </label>
            <input
              type="email"
              name="email"
              value={values.email}
              autoComplete="off"
              onChange={handleInputChange}
            
            />
          </div>
          <div className="form">
            <label htmlFor="cuadro">Cuadro: </label>
            <select
              name="cuadro"
              value={values.cuadro}
              onChange={handleInputChange}
            >
              <option value="oficial">Oficial</option>
              <option value="suboficial">Suboficial</option>
              <option value="marinero">Marinero Tropa Voluntaria</option>
            </select>
          </div>
          <div className="recibir">
            <label htmlFor="recibir">
              <input type="checkbox" className="recibir" />
              Deseo recibir información sobre novedades
            </label>
          </div>

          <button type="submit" className="btn"> Enviar Datos</button>
        </div>
      </form>
    </div>
  );
};

export default Inscripcion;
