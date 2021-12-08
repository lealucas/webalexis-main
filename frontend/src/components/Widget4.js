import 'bootstrap/dist/css/bootstrap.min.css';
import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


// http://api.marketstack.com/v1/tickers?access_key=e90d62516d331558297f38fbdcd62d56  -> Pour trouver les acronymes
// https://cloud.iexapis.com/stable/stock/goog/intraday-prices?&token=pk_ee406da9705b486dbd0173d2c592e8f4


const data = [
  {name: 'GOOGLE', cours_moyen: 1766.66, nombre_d_actions_vendues: 8, amt: 2400,
  },
  {
    name: 'APPLE', cours_moyen: 116.035, nombre_d_actions_vendues: 6581, amt: 2210,
  },
  {
    name: 'FACEBOOK', cours_moyen: 275.64, nombre_d_actions_vendues: 2063, amt: 2290,
  },
  {
    name: 'AMAZON', cours_moyen: 3184.787, nombre_d_actions_vendues: 1083, amt: 2000,
  },
  {
    name: 'MICROSOFT', cours_moyen: 213.645, nombre_d_actions_vendues: 11716, amt: 2181,
  }];

class CustomizedLabel extends PureComponent {
  render() {
    const {
      x, y, stroke, value,
    } = this.props;

    return <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">{value}</text>;
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const {
      x, y, stroke, payload,
    } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#FFFFFF" transform="rotate(-35)">{payload.value}</text>
      </g>
    );
  }
}

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/5br7g9d6/';

  render() {
    return ( 
      <div className="widget4">
        <h1>COURS DES BIG5</h1>
        <LineChart
          width={325}
          height={275}
          data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" height={100} tick={<CustomizedAxisTick />} />
          <YAxis tick={<CustomizedAxisTick />}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey= "nombre_d_actions_vendues" stroke="#FFD044" label={<CustomizedLabel />} />
          <Line type="monotone" dataKey="cours_moyen" stroke="#000" />
        </LineChart>
      </div>
    );
  }
}

