import React from 'react';
import "./Sidenav.css";

import {IoHome,IoRibbon,IoRocket,IoNewspaper} from "react-icons/io5"

const Sidenav = () => {
    return ( 
        <div className="sidenav">
            <a href="/" className="icon click">
                <IoHome size="30" color="white"/>
            </a>
            <a href="/#propuesta-valor" className="icon click">
                <IoRibbon size="30" color="white"/>
            </a>
            <a href="/#fecha-lanzamiento" className="icon click">
                <IoRocket size="30" color="white"/>
            </a>
            <a href="/#formulario" className="icon click">
                <IoNewspaper size="30" color="white"/>
            </a>
        </div>
     );
}
 
export default Sidenav;