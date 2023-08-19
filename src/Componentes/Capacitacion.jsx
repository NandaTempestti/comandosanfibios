import React from "react";
import "../Css/capacitacion.css";
import Card from 'react-bootstrap/Card';
import paracaidismo from "../assets/paracaidismo.jpg";
import buceo from "../assets/buceo1.jpg";
import andinismo from "../assets/andinismo1.jpg";
import esqui from "../assets/esqui.jpeg";

function CarouselFadeExample() {
  return (
    <div className="seccion">
      <h1>Capacitaciones</h1>
      <br />
      <div className="operaciones">
        <div className="formacion">
          <h2> Nuestras Operaciones</h2>
          <p>
            Requieren Alta especialización, producto de una esmerada formación
            táctico-técnica para satisfacer misiones especiales, actuando
            aisladamente o integrando pequeñas fracciones.
          </p>
          <p>
            Clara compenetración y sentido de la responsabilidad en el
            cumplimiento de la misión impuesta.
          </p>
          <p>
            ENTEREZA MORAL Y RESISTENCIA FÍSICA compatible con el esfuerzo a
            sobrellevar.
          </p>
        </div>
        <div className="actividades">
          <h3>Actividades</h3>
        </div>
      </div>

      <div className="card1">
      <Card className="card">
        <Card.Img variant="top" src={paracaidismo} alt="paracaidismo"/>
        <Card.Body>
          <Card.Text>
          Paracaidismo
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card">
        <Card.Img variant="top" src={buceo} alt="buceo"/>
        <Card.Body>
          <Card.Text>
          Buceo
          </Card.Text>
        </Card.Body>
      </Card>
      </div>

      <div className="card2">
      <Card className="card">
        <Card.Img variant="top" src={andinismo} alt="andinismo"/>
        <Card.Body>
          <Card.Text>
          Andinismo
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="card">
        <Card.Img variant="top" src={esqui} alt="esqui"/>
        <Card.Body>
          <Card.Text>
          Esquí
          </Card.Text>
        </Card.Body>
      </Card>
      </div>

    </div>
  );
};

export default CarouselFadeExample;
