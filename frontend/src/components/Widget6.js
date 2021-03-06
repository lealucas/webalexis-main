import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import EasyJet from '../images/EasyJet.png';
import airplane from '../images/airplane.png';
import Axios from 'axios';



class Widget6 extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            recherche : '',
            billet: ''
        }
        this.handleChangeBillet= this.handleChangeBillet.bind(this);
        this.getBilletWithId= this.getBilletWithId.bind(this);
        this.getBillet = this.getBillet.bind(this);
    }

    async handleChangeBillet(e){
        await this.setState({
            recherche: e.target.value
        })
        console.log(this.state)
    }

    
    async getBillet(){
        try{
            await Axios.get("http://localhost:8080")
            .then(async reponse => {
                const data = await reponse.data;
                console.log(data)
                await this.setState({
                    billet: data[0]
                })
            })
            .catch(err =>{
                console.log(err);
            })
        }
        catch(err){
            console.log(err)
        }
    }

    async getBilletWithId(){
        try{
            await Axios.get(`http://localhost:8080/${this.state.recherche}`,)
            .then(async reponse => {
                const data = await reponse.data;
                console.log(data)
                await this.setState({
                    billet: data
                })
            })
            .catch(err =>{
                console.log(err);
            })
        }
        catch(err){
            console.log(err)
        }
    }

    render()
    {
        return(
            <div className="widget6" onLoad={this.getBillet}>
                &nbsp;
                <div className="row ">
                    <div className="supAvion col-4" >
                        <img className="logoECE" src={EasyJet} ></img>
                    </div>
                    <div className="col-4">
                        {
                            console.log(this.state.billet.from)
                        }
                        <h2> De {this.state.billet.from}</h2>
                    </div>
                    <div className="col-4">
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Destination"
                            aria-label="Destination"
                            aria-describedby="basic-addon2"
                            onChange={this.handleChangeBillet}
                            />
                            <InputGroup.Append>
                            <Button variant="dark" onClick={this.getBilletWithId}>Rechercher</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>

                &nbsp;
                    
                </div>

                <div className="row">
                    <div className="col-2">
                        <p>&ensp; N?? de vol : {this.state.billet.numero_vol}</p>
                    </div>
                    <div className="col-3">
                        <h4>{this.state.billet.from}</h4>
                        <i>{this.state.billet.airport_depart}</i>
                    </div>
                    <div className="col-2">
                        <p><img className="avion1" src={airplane} ></img><img className="avion2" src={airplane} ></img></p>
                        <b>{this.state.billet.avion}</b>
                    </div>
                    <div className="col-3">
                    <h4>{this.state.billet.to}</h4>
                    <i>{this.state.billet.airport_arrive}</i>
                    </div>
                    <div className="clignotement col-2">
                        <b>{this.state.billet.statut}</b>
                    </div>
                </div>
                &nbsp;
                <div className="row">

                    <div className="depart col-6">
                    <h2>Depart</h2>
                    <p>{this.state.billet.airport_depart}</p>
                    <p>Heure de d??part : {this.state.billet.date_et_heure_depart}</p>
                    <p>Terminal : {this.state.billet.terminal_depart}</p>
                    <p>Gate : {this.state.billet.Gate_depart}</p>
                    </div>
                    <div className="arrivee col-6">
                    <h2>Arriv??e</h2>
                    <p>{this.state.billet.airport_arrive}</p>
                    <p>Heure d'arriv??e : {this.state.billet.date_et_heure_arrivee}</p>
                    <p>Terminal : {this.state.billet.terminal_arrive}</p>
                    <p>Gate : {this.state.billet.Gate_arrive}</p>
                    </div>
                    
                </div>

                <div className="row">
                    
                </div>
            </div>
        );

    }
}

export default Widget6;



/*"vols": [
    {
      "from": "PARIS",
      "airport_depart" : "Roissy Charles De Gaulle",
      "to": "NEW YORK",
      "airport_arriv??": "John. F. Kennedy International Airoport",
      "date_et_heure_depart": "2020-12-01  10:20:31",
      "date_et_heure_arriv??e": "2020-12-01  13:01:53",
      "numero_vol": "AF3564",
      "statut": "EN COURS ",
      "avion": "A380",
      "temps_vol": "8h35",
      "terminal_d??part": "2E",
      "Gate_d??part": "17",
      "terminal_arriv??": "23",
      "Gate_arriv??": "73"
    },
    {
      "from": "PARIS",
      "airport_depart" : "Roissy Charles De Gaulle",
      "to": "SHANGHAI",
      "airport_arriv??": "Shanghai Pudong International Airport",
      "date_et_heure_depart": "2020-12-01  13:37:31",
      "date_et_heure_arriv??e": "2020-12-01  07:52:53",
      "numero_vol": "AF7354",
      "statut": "DEPART IMMINENT",
      "terminal_d??part": "2E",
      "Gate_d??part": "35",
      "avion": "A320",
      "temps_vol": "11h35",
      "terminal_arriv??": "13",
      "Gate_arriv??": "51"
    },
    {
      "from": "PARIS",
      "airport_depart" : "Roissy Charles De Gaulle",
      "to": "DUBAI",
      "airport_arriv??": "Dubai International Airport",
      "date_et_heure_depart": "2020-12-01  12:03:27",
      "date_et_heure_arriv??e": "2020-12-01  22:20:16",
      "numero_vol": "AF3846",
      "statut": "DEPART IMMINENT",
      "terminal_d??part": "4D",
      "Gate_d??part": "63",
      "avion": "A330",
      "temps_vol": "6h45",
      "terminal_arriv??": "G7",
      "Gate_arriv??": "75"
    },
    {
      "from": "PARIS",
      "airport_depart" : "Roissy Charles De Gaulle",
      "to": "ABIDJAN",
      "airport_arriv??": "F??lix-Houphou??t-Boigny International Airport",
      "date_et_heure_depart": "2020-12-01  14:05:31",
      "date_et_heure_arriv??e": "2020-12-01  19:30:53",
      "numero_vol": "AF1823",
      "statut": "PROCHAINEMENT",
      "terminal_d??part": "D3",
      "avion": "B787",
      "Gate_d??part": "33",
      "temps_vol": "6h25",
      "terminal_arriv??": "2D",
      "Gate_arriv??": "3"
    },
    {
      "from": "PARIS",
      "airport_depart" : "Roissy Charles De Gaulle",
      "to": "BUENOS AIRES",
      "airport_arriv??": "Ministro Pistarini International Airport",
      "date_et_heure_depart": "2020-12-01  23:20:21",
      "date_et_heure_arriv??e": "2020-12-02  09:03:43",
      "numero_vol": "AF2734",
      "statut": "PROCHAINEMENT",
      "terminal_d??part": "23",
      "Gate_d??part": "38",
      "temps_vol": "13h35",
      "avion": "A350",
      "terminal_arriv??": "2F",
      "Gate_arriv??": "59"
    },
    {
      "from": "PARIS",
      "airport_depart" : "Roissy Charles De Gaulle",
      "to": "SYDNEY",
      "airport_arriv??": "Sydney Kingsford Smith Airport",
      "date_et_heure_depart": "2020-12-01  05:37:31",
      "date_et_heure_arriv??e": "2020-12-02  15:45:53",
      "numero_vol": "AF9383",
      "statut": "EN COURS",
      "terminal_d??part": "2E",
      "Gate_d??part": "53",
      "avion": "B737-MAX",
      "temps_vol": "21h50",
      "terminal_arriv??": "A4",
      "Gate_arriv??": "43"
    },
    {
      "from": "PARIS",
      "airport_depart" : "Roissy Charles De Gaulle",
      "to": "MADRID",
      "airport_arriv??": "Madrid Barajas International Airport",
      "date_et_heure_depart": "2020-12-01  09:30:47",
      "date_et_heure_arriv??e": "2020-12-01  11:35:34",
      "numero_vol": "AF8364",
      "statut": "ARRIVEE",
      "terminal_d??part": "2E",
      "Gate_d??part": "83",
      "avion": "A318",
      "temps_vol": "2h05",
      "terminal_arriv??": "3G",
      "Gate_arriv??": "35"
    }

      ] */