import "./App.css";
import Sidenav from "./components/sidenav/Sidenav";
import {IoLogoInstagram} from "react-icons/io";

function App() {
  return (
    <div className="App">
      <Sidenav />
      <div className="header section ">
        <div className="waves theme1 middle">
          <h1>Punto Verde</h1>
          <div className="header-content">
            <h3>Descripción</h3>
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
        <div>Formulario preventa</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

const Footer = () => {
  return (
    <div className="footer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#021c1e"
          fillOpacity="1"
          d="M0,96L26.7,122.7C53.3,149,107,203,160,224C213.3,245,267,235,320,192C373.3,149,427,75,480,80C533.3,85,587,171,640,224C693.3,277,747,299,800,309.3C853.3,320,907,320,960,277.3C1013.3,235,1067,149,1120,133.3C1173.3,117,1227,171,1280,197.3C1333.3,224,1387,224,1413,224L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
      <div className="footer-content">
        <div className="grid-3">
          <h3>Contactenos</h3>
          <h3>Dirección</h3>
          <div className="middle">
            <h3>Redes Sociales</h3>
            <a className="click" href="https://instagram.com/puntoverde2022?r=nametag">
              <IoLogoInstagram size="30" color="white"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
