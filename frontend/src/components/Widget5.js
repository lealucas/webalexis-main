
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';


// http://api.marketstack.com/v1/timezones?access_key=e90d62516d331558297f38fbdcd62d56
//New York -> 1
//Buenos Aires -> 2
//Vancouver -> 8
//Shanghai -> 10
//Paris -> 15
//Jerusalem -> 24
//Singapore -> 44
//Sydney -> 56
const data = [
                {name: 'Sydney', Heure_Avance: '+11'},
                {name: 'Buenos_Aires', Heure_Retard: '3'},
                {name: 'Vancouver', Heure_Retard: '8'},
                {name: 'New_York', Heure_Avance: '+4'},
                {name: 'Shanghai', Heure_Avance: '+8'},
                {name: 'Paris', Heure_Avance: '+1'},
                {name: 'Jerusalem', Heure_Avance: '+2'},
                {name: 'Singapore',Heure_Avance: '+9'}];


  


class Widget5 extends React.Component 
{
    constructor(props)
    {
       super(props);
       this.state = {

            date: new Date() 
        }
    }

    componentDidMount() { 
        this.timerID = setInterval(
            () => this.tick(), 
            1000 
        ); 
    } 

    componentWillUnmount() { 
        clearInterval(this.timerID); 
    } 

    tick() { 
        this.setState({ 
            date: new Date() 
        }); 
    } 


    render()
    {
        return(
            <div className="widget5">
            &nbsp;
                <h1>Décalage horaire par rapport à l heure GMT {this.state.date.toLocaleTimeString()}</h1>     
                &nbsp;                   
                <BarChart width={325} height={200} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" /><YAxis />
                  <Tooltip />
            
                <Legend />
                <Bar dataKey="Heure_Retard" fill="#000" />
                <Bar dataKey="Heure_Avance" fill="#fff" />
                </BarChart>
            </div>
        );

    }
}

export default Widget5;
