import React from 'react';
import './Language.css';

const Language = (props) => {
    return ( 
        <div className="language">
            <div className="flag" onClick={(e)=>{props.setIdioma("en")}}>
                EN
            </div>
            <div className="flag" onClick={(e)=>{props.setIdioma("es")}}>
                ES
            </div>
        </div>
     );
}
 
export default Language;