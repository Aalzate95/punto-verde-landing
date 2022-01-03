import "./App.css";
import Sidenav from "./components/sidenav/Sidenav";

function App() {
  return (
    <div className="App">
      <Sidenav />
      <div className="section1">
        <div className="header">
          <h1>Punto Verde</h1>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#2c7873"
              fillOpacity="1"
              d="M0,224L30,234.7C60,245,120,267,180,240C240,213,300,139,360,117.3C420,96,480,128,540,160C600,192,660,224,720,224C780,224,840,192,900,165.3C960,139,1020,117,1080,138.7C1140,160,1200,224,1260,229.3C1320,235,1380,181,1410,154.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="content">
          <h3>Descripción</h3>
        </div>
      </div>
      
      <div className="section">
        <div>Propuesta de valor</div>
      </div>
      <div className="section">
        <div>Fecha de lanzamiento</div>
      </div>
      <div className="section">
        <div>Formulario preventa</div>
      </div>
    </div>
  );
}

export default App;
