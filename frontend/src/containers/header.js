import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ece from '../images/ece.png';
import EasyJet from '../images/EasyJet.png';
import {Link} from 'react-router-dom';


const Header = () => {
    return(
        <div class="header row"> 
            <div className="col-3"><img className="logoECE" src={Ece}></img></div>
            <div className="dashname col-3">
            	<h2 className="titleHeader">Easy Jet</h2>
            </div>
            <div className="col-3">
            <p></p>
                <Link className="btn-welcome btnHeader" to="/admin">Admin</Link>
                <Link className="btn-welcome btnHeader" to="/">Accueil</Link>
            </div>
        </div>
    );
}

export default Header;