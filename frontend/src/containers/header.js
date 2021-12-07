import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ece from '../images/ece.png';
import AirFrance from '../images/airFrance.png';
import {Link} from 'react-router-dom';


const Header = () => {
    return(
        <div class="header row"> 
            <div className="col-4"><img src={Ece}></img></div>
            <div className="dashname col-3">
            	<h2><b>Air France</b></h2>
            </div>
            <div className="col-3">
            <p></p><img src={AirFrance}></img></div>
            <div className="col-2">
            <p></p>
                <Link className="btn-welcome" to="/admin">Admin</Link>
                <Link className="btn-welcome" to="/">Accueil</Link>
            </div>
        </div>
    );
}

export default Header;