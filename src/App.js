import React, { useState } from "react";
import "./App.css";
import Sidenav from "./components/sidenav/Sidenav";
import { IoLogoInstagram } from "react-icons/io";
import {FcHome} from 'react-icons/fc'
import logo from "./images/punto-verde-logo.png";
import Language from "./components/language/Language";
import reciclajePlaneta from "./images/reciclaje-planeta.png";
import fundaEcologica from "./images/funda-ecologica.png";
import fundasTipos from "./images/fundas-tipos.png";
import fundaFrontal from "./images/funda-frontal.png";
import instruccionesUso from "./images/instrucciones-uso.png";
import mundo from "./images/mundo.png";
import fundaLlena from "./images/funda-llena.png";
import recolectando from "./images/recolectando.png";
import clasificacionBasura from "./images/clasificacion-basura.png";

const idiomas = {
  "es": {
      "descripcion":{
        "title":"Descripción",
        "descripcion1":"Este proyecto guiara a las personas para que puedan reciclar de la manera correcta los materiales que tienen en sus hogares a través de una aplicación la cual también va de la mano junto a las fundas de colores que se entregan, este sistema consta de niveles que le darán beneficios como cupones de descuentos, etc.",
        "descripcion2":"En esta aplicación se trata de que el usuario tenga la facilidad de realizar la actividad sin llegar a las grandes recicladoras, de esta manera las personas entregan estos materiales a nosotros quienes funcionamos como 'intermediarios'.",
        "descripcion3":"Entre las características de este producto tenemos las fundas biodegradables, tienda de productos realizados con el reciclaje, beneficios para los usuarios más comprometidos, control para los sectores de los usuarios."
      },
      "propuesta":{
        "title":"Propuesta de valor",
        "descripcion1":"Las empresas que colaboren, podrán tener publicidad para poder hacerse conocer mediante el emprendimiento, y las personas voluntarias podrán adquirir conocimientos que muchos carecen sobre el reciclaje para incluso poder aprovechar dichos conocimientos en su día a día, y podrán adquirir ciertos productos que se consiguen en cualquier punto de venta puesto que, estos estarán hechos en base a material reciclado.",

      },
      "fecha":{
        "title":"Fecha de Lanzamiento",
        "lanzamiento":"22 de abril del 2022",
        "descripcion1":"Cada vez más cerca de tu hogar."
      },
      "escribenos":{
        "title":"Escribenos",
        "descripcion1":"QUIERO SER VOLUNTARIO !",
      },
      "contactenos": {
        "title":"Contactenos"
      },
      "direccion":{
        "title":"Dirección"
      },
      "redes":{
        "title":"Redes Sociales"
      },
  },
  "en": {
    "descripcion":{
      "title":"Description",
      "descripcion1":"This project will guide people so that they can correctly recycle the materials they have in their homes through an application which also goes hand in hand with the colored covers that are delivered, this system consists of levels that They will give benefits such as discount coupons, etc.",
      "descripcion2":"In this application, it is the user's responsibility to do the activity without getting to the large recyclers, so that people deliver these materials to us as 'intermediaries'.",
      "descripcion3":"Among the characteristics of this product we have the biodegradable covers, store of products made with the recycling, benefits for the more committed users, control for the sectors of the users."
    },
    "propuesta":{
      "title":"Value Proposal",
      "descripcion1":"Companies that collaborate, will have advertising to make themselves known through the entrepreneurship, and volunteers will be able to acquire knowledge that many lack on recycling to even be able to use those knowledge in their daily life, and will be able to acquire certain products that they can get in any point of sale, because, these will be made in base to recycled material."
    },
    "fecha":{
      "title":"Release date",
      "lanzamiento":"22 April, 2022",
      "descripcion1":"Every time closer to your home."
    },
    "escribenos":{
      "title":"Write us",
      "descripcion1":"I WANT TO BE VOLUNTEER !",
    },
    "contactenos": {
      "title":"Contact Us"
    },
    "direccion":{
      "title":"Address"
    },
    "redes":{
      "title":"Social Networks"
    },
    
  }
}

function App() {
  const [mailMensaje, setMailMensaje] = useState("");
  const [mailNombre, setMailNombre] = useState("");
  const [mailCiudad, setMailCiudad] = useState("");
  const [idioma, setIdioma] = useState("es");

  
  return (
    <div className="App">
      <Language 
        idioma={idioma}
        setIdioma={setIdioma}
      />
      <Sidenav />
      <div className="header">
        <div className="waves theme1 middle">
          <div className="header-grid">
            <div className="images-header">
              <img className="image-small none" src={reciclajePlaneta} alt="logo" />
            </div>

            <div className="header-logo">
              <img src={logo} alt="logo" />
              <h1>Punto Verde</h1>
            </div>

            <div className="images-header">
              <img className="image-small none" src={fundaEcologica} alt="logo" />
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
          <h1>{idiomas[idioma].descripcion.title}</h1>
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
            <div className="review">
              <p>
              {idiomas[idioma].descripcion.descripcion1}
              </p>
              <p>
              {idiomas[idioma].descripcion.descripcion2}
              </p>
            </div>
          </div>
          <div className="margin-top-bottom">
            <div>
              <img className="image-medium" src={fundasTipos} alt="logo" />
            </div>
            <div>
              <p>
              {idiomas[idioma].descripcion.descripcion3}
              </p>
              <div>
                <img className="image-large" src={fundaFrontal} alt="logo"/>
                <img className="image-large" src={instruccionesUso} alt="logo" />
              </div>

              
            </div>
            <table className="table-prices">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Funda(100 unidades)</td>
                  <td>$20</td>
                </tr>
                <tr>
                  <td>Funda(500 unidades)</td>
                  <td>$60</td>
                </tr>
                <tr>
                  <td>Funda(1500 unidades)</td>
                  <td>$180</td>
                </tr>
                <tr>
                  <td>Funda(3000 unidades)</td>
                  <td>$360</td>
                </tr>
                <tr>
                  <td>Funda(5000 unidades)</td>
                  <td>$600</td>
                </tr>
              </tbody>
              <tbody>

              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="section middle" id="propuesta-valor">
        <div className="content">
          <h2>{idiomas[idioma].propuesta.title}</h2>
          <div className="value-proposal">
            <p>
            {idiomas[idioma].propuesta.descripcion1}
            </p>
          </div>
          <div className="imagenes-proposal">
            <img className="image-large" src={mundo} alt="logo"/>  
            <img className="image-large" src={fundaLlena} alt="logo"/> 
            <img className="image-large" src={clasificacionBasura} alt="logo"/> 
            <img className="image-large" src={recolectando} alt="logo"/> 
          </div>
          
        </div>
      </div>
      <div className="section middle" id="fecha-lanzamiento">
        <div className="content-lanzamiento middle">
          <h2>{idiomas[idioma].fecha.title}</h2>
          <div>
            <h3>{idiomas[idioma].fecha.lanzamiento}</h3>
            <br/>
            <p>{idiomas[idioma].fecha.descripcion1}</p>
            <FcHome size={50}/>
          </div>
          
        </div>
      </div>

      <div className="section middle" id="formulario">
        <h2>{idiomas[idioma].escribenos.title}</h2>
        <div className="Contacto-content">
          <p>{idiomas[idioma].escribenos.descripcion1}</p>
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
              placeholder="CIUDAD"
              onChange={(e) => {
                setMailCiudad(e.target.value);
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
              href={`mailto:aalzate@espol.edu.ec?subject=Quiero contactar contigo, mi nombre es ${mailNombre}, provengo de la ciudad de ${mailCiudad}&body=${mailMensaje}`}
              className="form-button"
            >
              Enviar
            </a>
          </div>
        </div>
      </div>
      <Footer 
        idioma={idioma}
      />
    </div >
  );
}

export default App;

const Footer = (props) => {
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
            <h4>{idiomas[props.idioma].contactenos.title}</h4>
            <p>telf: +593 04-6034092</p>
            <p>cel: +593 0989909415</p>
            <p>
              Mail:{" "}
              <a className="a-blanco" href="mailto:soporte@puntoverde.com">
                soporte@puntoverde.com
              </a>
            </p>
          </div>

          <div className="center none">
            <h4>{idiomas[props.idioma].direccion.title}</h4>
            <p>
              Ecuador, Guayaquil - Complejo Ciudad del Río, Edificio The Point
              piso 24
            </p>
          </div>

          <div className="center">
            <h4>{idiomas[props.idioma].redes.title}</h4>
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
