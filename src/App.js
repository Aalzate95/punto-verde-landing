import React, { useState } from "react";
import "./App.css";
import Sidenav from "./components/sidenav/Sidenav";
import { IoLogoInstagram } from "react-icons/io";
import logo from "./images/punto-verde-logo.png";
import Language from "./components/language/Language";
import reciclajePlaneta from "./images/reciclaje-planeta.png";
import fundaEcologica from "./images/funda-ecologica.png";
import fundasTipos from "./images/fundas-tipos.png";
import fundaFrontal from "./images/funda-frontal.png";
import instruccionesUso from "./images/instrucciones-uso.png";

function App() {
  const [mailMensaje, setMailMensaje] = useState("");
  const [mailNombre, setMailNombre] = useState("");

  return (
    <div className="App">
      <Language />
      <Sidenav />
      <div className="header">
        <div className="waves theme1 middle">
          <div className="header-grid">
            <div className="">
              <img className="image-small" src={reciclajePlaneta} alt="logo" />
            </div>

            <div className="header-logo">
              <img src={logo} alt="logo" />
              <h1>Punto Verde</h1>
            </div>

            <div className="">
              <img className="image-small" src={fundaEcologica} alt="logo" />
            </div>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#2c7873"
              fillOpacity="1"
              d="M0,224L30,234.7C60,245,120,267,180,240C240,213,300,139,360,117.3C420,96,480,128,540,160C600,192,660,224,720,224C780,224,840,192,900,165.3C960,139,1020,117,1080,138.7C1140,160,1200,224,1260,229.3C1320,235,1380,181,1410,154.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="section middle" id="descripcion">
        <div className="content ">
          <h1>Descripción</h1>
          <div className="description-content margin-top-bottom">
            <div className="video-responsive">
              <iframe
                src="https://www.youtube.com/embed/i31-OFflIfw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <p>
                Este proyecto guiara a las personas para que puedan reciclar de
                la manera correcta los materiales que tienen en sus hogares a
                través de una aplicación la cual también va de la mano junto a
                las fundas de colores que se entregan, este sistema consta de
                niveles que le darán beneficios como cupones de descuentos, etc.
              </p>
              <p>
                En esta aplicación se trata de que el usuario tenga la facilidad
                de realizar la actividad sin llegar a las grandes recicladoras,
                de esta manera las personas entregan estos materiales a nosotros
                quienes funcionamos como “intermediarios”.
              </p>
            </div>
          </div>
          <div className="margin-top-bottom">
            <div>
              <img className="image-medium" src={fundasTipos} alt="logo" />
            </div>
            <div>
              <p>
                Entre las características de este producto tenemos las fundas
                biodegradables, tienda de productos realizados con el reciclaje,
                beneficios para los usuarios más comprometidos, control para los
                sectores de los usuarios.
              </p>
              <div>
                <img className="image-large" src={fundaFrontal} alt="logo"/>
                <img className="image-large" src={instruccionesUso} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section middle" id="propuesta-valor">
        <div className="content">
          <h2>Propuesta de valor</h2>
          <div>
            <p>
              Las empresas que colaboren, podrán tener publicidad para poder
              hacerse conocer mediante el emprendimiento, y las personas
              voluntarias podrán adquirir conocimientos que muchos carecen sobre
              el reciclaje para incluso poder aprovechar dichos conocimientos en
              su día a día, y podrán adquirir ciertos productos que se consiguen
              en cualquier punto de venta puesto que, estos estarán hechos en
              base a material reciclado.
            </p>
          </div>
        </div>
      </div>
      <div className="section middle" id="fecha-lanzamiento">
        <div>Fecha de lanzamiento</div>
      </div>

      <div className="section middle" id="formulario">
        <h2>Escribenos</h2>
        <div className="Contacto-content">
          <div className="form-group">
            <input
              className="form-control"
              name="from_name"
              type="text"
              id="nombre"
              placeholder="NOMBRE"
              onChange={(e) => {
                setMailNombre(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              name="message"
              type="text"
              placeholder="MENSAJE"
              onChange={(e) => {
                setMailMensaje(e.target.value);
              }}
            />
          </div>
          <div className="form-group contact-button">
            <a
              href={`mailto:aalzate@espol.edu.ec?subject=Quiero contactar contigo, mi nombre es ${mailNombre}&body=${mailMensaje}`}
              className="form-button"
            >
              Enviar
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#021c1e"
            fillOpacity="1"
            d="M0,96L26.7,122.7C53.3,149,107,203,160,224C213.3,245,267,235,320,192C373.3,149,427,75,480,80C533.3,85,587,171,640,224C693.3,277,747,299,800,309.3C853.3,320,907,320,960,277.3C1013.3,235,1067,149,1120,133.3C1173.3,117,1227,171,1280,197.3C1333.3,224,1387,224,1413,224L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="footer-content">
        <div className="grid-3">
          <div className="center">
            <h4>Contactenos</h4>
            <p>telf: +593 04-6034092</p>
            <p>cel: +593 0989909415</p>
            <p>
              Mail:{" "}
              <a className="a-blanco" href="mailto:soporte@puntoverde.com">
                soporte@puntoverde.com
              </a>
            </p>
          </div>

          <div className="center">
            <h4>Dirección</h4>
            <p>
              Ecuador, Guayaquil - Complejo Ciudad del Río, Edificio The Point
              piso 24
            </p>
          </div>

          <div className="center">
            <h4>Redes Sociales</h4>
            <a
              className="click"
              href="https://instagram.com/puntoverde2022?r=nametag"
            >
              <IoLogoInstagram size="30" color="white" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <p className="footer-copyright">
          Todos los derechos reservados - ©2022 Punto Verde
        </p>
      </div>
    </div>
  );
};
