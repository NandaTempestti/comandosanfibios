import React from "react";
import "../Css/footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding ">
        <div className="sb__footer-links">
          <div className="sb__footer-links-div">
            <h4> Dirección</h4>
            <p> Batallón de Infanteria de Marina N°2 </p>
            <p>Base Naval Puerto Belgrano</p>
          </div>
          <div className="sb__footer-links-div">
            <h4> Contacto</h4>
            <p> Email: apca.comandos@armada.mil.ar </p>
            <p>Teléfono: (+54 11) 4317-2000</p>
          </div>
          <div className="sb__footer-links-div">
            <h4>Nuestros Sitios</h4>
            <div className="iconos">
                <BsFacebook /> 
                <BsInstagram />
                <BsYoutube /> 
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default Footer;
