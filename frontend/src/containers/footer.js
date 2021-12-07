import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AirFrance from '../images/airFrance.png';
import Facebook from '../images/facebook.jpeg';
import Instagram from '../images/instagram.png';
import Linkedin from '../images/linkedin.jpg';
import Twitter from '../images/twitter.jpg';

const Footer = () => {
    return(
        <Card>
            <Card.Header>Technologie Web 2021</Card.Header>
            <Card.Body>
                <div className="bordurebas row">
                    <div className="col-4">
                        <h3>COORDONNEES</h3>
                        &nbsp;
                        <p>37, quai de Grenelle / 75015 </p>
                        <p>Paris</p>
                        <p>01 41 56 78 00</p>
                        <a href="mailto:airfrance@monavion.com"><i>Nous contacter</i></a>
                    </div>
                    <div className="col-4">
                    
                        <h3>DASHBOARD</h3>
                        <p></p>&nbsp;

                        <img src={AirFrance}></img>
                        <p></p>&nbsp;
                        <h4>Léa LUCAS & Cléo MICHALEC & Paul PERRIN</h4>
                    </div>
                    <div className="col-4">
                        <h3>NOUS SUIVRE</h3>
                        
                        <p><a href="https://www.linkedin.com/company/air-france"><img src={Linkedin} width="60" height="40"/></a></p>
                        <p><a href="https://www.facebook.com/airfrance/?ref=ts"><img src={Facebook} width="30" height="30"/></a></p>
                       <p> <a href="https://www.facebook.com/airfrance/?ref=ts"><img src={Instagram} width="30" height="30"/></a></p>
                        <p><a href="https://twitter.com/AirFranceFR"><img src={Twitter} width="30" height="30"/></a></p>
                        
                    </div>
                    &nbsp;
                </div>
                &nbsp;
                
                <div className="barredubas row">
                    <div className="borduredroite col-3">
                        <a href="https://www.airfrance.fr/FR/fr/local/transverse/footer/plan-du-site.htm"><h5>PLAN DU SITE</h5></a>
                    </div>
                    <div className="borduredroite col-3">
                        <a href="https://www.airfrance.fr/FR/fr/local/transverse/footer/edito_preambule.htm"><h5>INFORMATIONS LEGALES</h5></a>
                    </div>
                    <div className="borduredroite col-3">
                        <a href="https://www.airfrance.fr/FR/fr/common/transverse/footer/edito-politique-confidentialite.htm"><h5>POLITIQUE DE CONFIDENTIALITE</h5></a>
                    </div>
                    <div className="col-3">
                        <a href="https://fr.wikipedia.org/wiki/Air_France"><h5>A PROPOS D'AIR FRANCE</h5></a>
                    </div>
                </div>
                &nbsp;
            </Card.Body>
        </Card>
    );
}

export default Footer;