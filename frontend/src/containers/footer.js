import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EasyJet from '../images/EasyJet.png';
import Facebook from '../images/facebook.png';
import Instagram from '../images/instagram.png';
import Linkedin from '../images/linkedin.png';
import Twitter from '../images/twitter.png';

const Footer = () => {
    return(
        <Card className="cardFooter">
            <Card.Header>Technologie Web 2021</Card.Header>
            <Card.Body>
                <div className="bordurebas row">
                    <div className="col-4 columnfooter">
                        <h3>COORDONNEES</h3>
                        &nbsp;
                        <p>37, quai de Grenelle / 75015 </p>
                        <p>Paris</p>
                        <p>01 41 56 78 00</p>
                        <a href="mailto:airfrance@monavion.com"><i>Nous contacter</i></a>
                    </div>
                    <div className="col-4 columnfooter">
                    
                        <h3>DASHBOARD</h3>
                        <p></p>&nbsp;

                        
                        <p></p>&nbsp;
                        <h4>Léa LUCAS & Cléo MICHALEC & Paul PERRIN</h4>
                    </div>
                    <div className="col-4 columnfooter">
                        <div className="title-barredubas">
                            <h3>NOUS SUIVRE</h3>
                        </div>
                        <div className="networks-image">
                            <a href="https://www.linkedin.com/company/easyjet/"><img src={Linkedin} width="40"/></a>
                            <a href="https://www.facebook.com/easyJetFrance"><img src={Facebook} width="30"/></a>
                            <a href="https://www.instagram.com/easyjet/"><img src={Instagram} width="30"/></a>
                            <a href="https://twitter.com/easyJet"><img src={Twitter} width="30"/></a>
                        </div>

                        <div className="logo">
                        <img className="logoEasyJet" src={EasyJet}></img>
                        </div>
                        
                        
                    </div>
                    &nbsp;
                </div>
                &nbsp;
                
                <div className="barredubas row">
                    <div className="borduredroite col-3">
                        <a href="https://www.easyjet.com/fr/conditions-generales"><h5 className="titleFooter">INFORMATIONS LEGALES</h5></a>
                    </div>
                    <div className="borduredroite col-3">
                        <a href="https://www.easyjet.com/fr/politique/notre-promesse-de-confidentialite"><h5 className="titleFooter">POLITIQUE DE CONFIDENTIALITE</h5></a>
                    </div>
                    <div className="col-3">
                        <a href="https://fr.wikipedia.org/wiki/EasyJet"><h5 className="titleFooter">A PROPOS D'EASY JET</h5></a>
                    </div>
                </div>
                &nbsp;
            </Card.Body>
        </Card>
    );
}

export default Footer;