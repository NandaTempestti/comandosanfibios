import React from "react";
import apcaVideo from "../assets/apca.mp4";
import "../Css/main.css";
import comments from "../js/comentarios.js";
import { Row, Col } from "react-bootstrap";

const Home = () => {

  return (
    <>
      <div className="main">

        <div className="capa"></div>
        <video src={apcaVideo} autoPlay loop muted />

        <h1>Agrupación de Comandos Anfibios</h1>

      </div>
      <br />
      <div className="comentarios">
        <Row className="filacomentario">

          {comments.map((comments) => {
            console.log(comments.body);
            console.log(comments.username);

            return (
              <>
                <Col>
                  <p> {comments.body} </p>
                  <h4> {comments.username} </h4>
                </Col>

              </>
            )
          })}
        </Row>
      </div>

    </>
  );
};

export default Home;
