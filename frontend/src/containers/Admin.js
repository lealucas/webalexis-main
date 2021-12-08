import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';


class Admin extends React.Component 
{
	constructor(props)
	{
        super(props);
        this.state = {

            from : "Paris",
            airport_depart : "Roissy CDG",
            to : '',
            airport_arrive : '',
            date_et_heure_depart: '',
            date_et_heure_arrivee: '',
            numero_vol: "AF534",
            statut: "EN COURS",
            terminal_depart: "2E",
            avion: "A380",
            Gate_depart: "21",
            terminal_arrive: '',
            Gate_arrive: ''
            
        }
        this.handleChangeTo= this.handleChangeTo.bind(this);
        this.handleChangeGateArrive= this.handleChangeGateArrive.bind(this);
        this.handleChangeId= this.handleChangeId.bind(this);
        this.handleChangeTerminalArrive= this.handleChangeTerminalArrive.bind(this);
        this.handleChangeDateArrive= this.handleChangeDateArrive.bind(this);
        this.handleChangeDateDepart= this.handleChangeDateDepart.bind(this);
        this.handleChangeAirportArrive= this.handleChangeAirportArrive.bind(this);

        this.submitBillet = this.submitBillet.bind(this);
        this.changeBillet = this.changeBillet.bind(this);
        this.deleteBillet = this.deleteBillet.bind(this);

    }
    async handleChangeTo(e){
        await this.setState({
            to: e.target.value
        })
    }
    async handleChangeAirportArrive(e){
        await this.setState({
            airport_arrive: e.target.value
        })
    }
    async handleChangeDateDepart(e){
        await this.setState({
            date_et_heure_depart: e.target.value
        })
    }
    async handleChangeDateArrive(e){
        await this.setState({
            date_et_heure_arrivee: e.target.value
        })
    }
    async handleChangeTerminalArrive(e){
        await this.setState({
            terminal_arrive: e.target.value
        })
    }
    async handleChangeGateArrive(e){
        await this.setState({
            Gate_arrive: e.target.value
        })
    }
    async handleChangeId(e){
        await this.setState({
            id: e.target.value
        })
    }
    async submitBillet(){
        try{
            var post={
                from : this.state.from,
                airport_depart : this.state.airport_depart,
                to : this.state.to,
                airport_arrive : this.state.airport_arrive,
                date_et_heure_depart: this.state.date_et_heure_depart,
                date_et_heure_arrivee: this.state.date_et_heure_arrivee,
                numero_vol: this.state.numero_vol,
                statut: this.state.statut,
                terminal_depart: this.state.terminal_depart,
                avion: this.state.avion,
                Gate_depart: this.state.Gate_depart,
                terminal_arrive: this.state.terminal_arrive,
                Gate_arrive: this.state.Gate_arrive
            }
            console.log(post)
            await Axios.post("http://localhost:8080/", post)
            .then(async reponse => {
                const data = await reponse.data;
                console.log(data)
            })
            .catch(err =>{
                console.log(err);
            })
        }
        catch(err){
            console.log(err)
        }
    }


    async changeBillet(){
        try{
            var patch={
                from : this.state.from,
                airport_depart : this.state.airport_depart,
                to : this.state.to,
                airport_arrive : this.state.airport_arrive,
                date_et_heure_depart: this.state.date_et_heure_depart,
                date_et_heure_arrivee: this.state.date_et_heure_arrivee,
                numero_vol: this.state.numero_vol,
                statut: this.state.statut,
                terminal_depart: this.state.terminal_depart,
                avion: this.state.avion,
                Gate_depart: this.state.Gate_depart,
                terminal_arrive: this.state.terminal_arrive,
                Gate_arrive: this.state.Gate_arrive,
                id: ''
            }
            console.log(patch)
            await Axios.patch(`http://localhost:8080/${this.state.id}`, patch)
            .then(async reponse => {
                const data = await reponse.data;
                console.log(data)
            })
            .catch(err =>{
                console.log(err);
            })
        }
        catch(err){
            console.log(err)
        }
    }


    async deleteBillet(){
        try{
            await Axios.delete(`http://localhost:8080/${this.state.id}`)
            .then(async reponse => {
                const data = await reponse.data;
                console.log("billet supprimé")
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


            <div className="Accueil container">
                <Form >

                    <Form.Group controlId="formGridAddressq1">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control  onChange={this.handleChangeTo}/>
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Aéroport</Form.Label>
                        <Form.Control placeholder="John. F. Kennedy International Airoport" onChange={this.handleChangeAirportArrive}/>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Date départ</Form.Label>
                        <Form.Control  placeholder="dd/mm/yy" onChange={this.handleChangeDateDepart}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Date arrivée</Form.Label>
                        <Form.Control  placeholder="dd/mm/yy" onChange={this.handleChangeDateArrive}/>
                        </Form.Group>
                    </Form.Row>

                    
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Terminal</Form.Label>
                        <Form.Control onChange={this.handleChangeTerminalArrive}/>
                        </Form.Group>


                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Gate</Form.Label>
                        <Form.Control onChange={this.handleChangeGateArrive}/>
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary"  onClick={this.submitBillet}>
                        Ajouter ce vol
                    </Button>
                    <Form.Row>
                        &nbsp;
                    </Form.Row>
                </Form>
                <h1>Modifier</h1>
                <Form >

                    <Form.Group controlId="formGridAddressq1">
                        <Form.Label>Id du vol</Form.Label>
                        <Form.Control  onChange={this.handleChangeId}/>
                    </Form.Group>
                    <Form.Group controlId="formGridAddressq1">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control  onChange={this.handleChangeTo}/>
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Aéroport</Form.Label>
                        <Form.Control placeholder="John. F. Kennedy International Airoport" onChange={this.handleChangeAirportArrive}/>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Date départ</Form.Label>
                        <Form.Control  placeholder="dd/mm/yy" onChange={this.handleChangeDateDepart}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Date arrivée</Form.Label>
                        <Form.Control  placeholder="dd/mm/yy" onChange={this.handleChangeDateArrive}/>
                        </Form.Group>
                    </Form.Row>


                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Terminal</Form.Label>
                        <Form.Control onChange={this.handleChangeTerminalArrive}/>
                        </Form.Group>


                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Gate</Form.Label>
                        <Form.Control onChange={this.handleChangeGateArrive}/>
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary"  onClick={this.changeBillet}>
                        Modifier ce vol
                    </Button>
                    <Form.Row>
                        &nbsp;
                    </Form.Row>
                </Form>


                <Form >

                    <Form.Group controlId="formGridAddressq1">
                        <Form.Label>Id du vol</Form.Label>
                        <Form.Control  onChange={this.handleChangeId}/>
                    </Form.Group>

                    <Button variant="primary"  type="Submit" onClick={this.deleteBillet}>
                        Supprimer ce vol
                    </Button>
                    <Form.Row>
                        &nbsp;
                    </Form.Row>
                </Form>
            </div>
            
        );

    }
}

export default Admin;