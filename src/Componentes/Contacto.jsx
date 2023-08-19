import React from 'react';
import {Container, Row, Col } from "react-bootstrap";
import "../Css/contacto.css"

function Contacto() {
    return(
        <div className="body">
        <Container>
         <Row className='mb-5 mt-3'> 
            <Col lg='8' >
                <h1 className='display-4 mb-4'> Contactanos </h1>
            </Col>
         </Row>   
         <Row className='sec_sp' >
            <Col lg='5' className='mb-5' >
                <h3 className='color_sec py-4'>Nuestro contacto</h3>
                <address>
                    <strong>Email: cursocomandoanfibio@gmail.com </strong>
                    <br />
                    <br />
                    <p>
                        <strong> Telefono: +549-291-4473533</strong>
                    </p>
                </address>
            </Col>
            <Col lg='7' className='d-flex align-items-center' >
                <form className='contact_form w-100'>
                    <Row>
                        <Col lg='6' className='form-group' >
                            <input 
                            className='form-control'
                            id="name"
                            name='Nombre' 
                            placeholder='Ingrese su nombre completo'
                            type='text'/>
                        </Col>
                        <Col lg='6' className='form-group' >
                            <input 
                            className='form-control rounded-0'
                            id="email"
                            name='Email' 
                            placeholder='Ingrese su email'
                            type='email'/>
                        </Col>
                    </Row>
                    <textarea className="form-control rounded-0" id="mensaje" name='Mensaje' placeholder='Ingrese su mensaje aquí' rows='5' ></textarea>
                    <br />
                    <Row>
                        <Col lg='12' className='form-group' >
                            <button className='btn ac_btn' type='submit'>Enviar mensaje </button>
                        </Col>
                    </Row>
                </form>
            </Col>

         </Row>
        </Container>
        </div>
    );
    
};

export default Contacto;