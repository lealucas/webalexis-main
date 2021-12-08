import React from 'react';import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import STORM from '../images/background.gif';
import CLEAR from '../images/clear.jpg';
import RAIN from '../images/rain.jpg';
import CLOUDS from '../images/clouds.jpg';
import MIST from '../images/mist.jpg';
import SNOW from '../images/snow.jpg';
import axios from 'axios';

//API KEY: 469f083b08f97911ab10d4224b13710b
// API CALL : api.openweathermap.org/data/2.5/weather?q={Paris}&appid={469f083b08f97911ab10d4224b13710b}
// http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=469f083b08f97911ab10d4224b13710b
class Widget1 extends React.Component 
{
	constructor(props)
	{
	   super(props);
	   this.state = {
            recherche : "Paris",
            meteo : undefined,
            image:null,
        }
    }
   

    getmeteo()
    {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.recherche}&units=metric&appid=c9eda8eb7a5a1352ab4f4c2b4cdfe4fa`)
        .then(res => {
            const nvmeteo = res.data;
            this.setState({ meteo : nvmeteo });
        })
    }

handleChange = (e) => {
    this.setState({
      nomVille: e.target.value

    })
     this.setState({recherche : e.target.value})
  }

componentDidMount() { 
        this.getmeteo();
    } 


handleSubmit = (e) => {
    e.preventDefault();
    this.getmeteo();
    const { user } = this.state;
   
        if ( this.state.meteo.weather &&(this.state.meteo.weather[0].main === "Rain")){
            this.setState({
                image: RAIN
            })
        }
        else if (this.state.meteo.weather &&(this.state.meteo.weather[0].main === "Clear")){
            this.setState({
                image: CLEAR
            })
        }
        else if (this.state.meteo.weather &&(this.state.meteo.weather[0].main === "Clouds")){
            this.setState({
                image: CLOUDS
            })
        }
        else if (this.state.meteo.weather &&(this.state.meteo.weather[0].main === "Mist")){
            this.setState({
                image: MIST
            })
        }
        else if ( this.state.meteo.weather &&(this.state.meteo.weather[0].main === "Snow" )){
            this.setState({
                image: SNOW
            })
        }
        else{
            this.setState({
                image: STORM
            })
        }
}

    render()
    {
        return(


            <div className="widget1" onMouseHover={this.getmeteo}>
            &nbsp;
                <div className = "container">
                    <div className="rechercherVille container">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Où souhaitez-vous partir en vacances ?"
                            aria-label="Rechercher Ville"
                            aria-describedby="basic-addon2"
                            onChange={this.handleChange}
                        />
                        <InputGroup.Append>
                            <Button variant="dark" onClick={this.handleSubmit}>Rechercher</Button>
                        </InputGroup.Append>
                    </InputGroup>  
                    </div>

                    <h1>Météo de {!!this.state.meteo &&(<>{this.state.meteo.name}</>)}</h1>
                    &nbsp;
                    <div className = "row">
                        <div className = "temps col-6"> 
                         &nbsp;       
                            <div className = "jesersarien" style={{ backgroundImage: `url(${this.state.image})` }} >      
                                <h3>{!!this.state.meteo &&(<>{this.state.meteo.weather[0].main}</>)}</h3>
                                <h5>{!!this.state.meteo &&(<>{this.state.meteo.weather[0].description}</>)}</h5>
                                <h1>{!!this.state.meteo &&(<>{this.state.meteo.main.temp}</>)} °C </h1>
                            </div>
                        </div>

                        <div className = "heure col-6">   
                            
                        <p>Température maximale :<h2>{!!this.state.meteo &&(<>{this.state.meteo.main.temp_max}</>)} °C</h2> </p>
                        <p>Température minimale :<h2>{!!this.state.meteo &&(<>{this.state.meteo.main.temp_min}</>)} °C</h2> </p> 
                        </div>

                    </div>
                    &nbsp;
                    <h2>Mercredi 8 Décembre 2021</h2>
                </div>
            </div>
            
        );

    }
}

export default Widget1;

