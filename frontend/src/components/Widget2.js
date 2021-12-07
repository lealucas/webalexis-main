/*
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Img1 from '../images/dollar-symbol.png';
import Img2 from '../images/bitcoin.png';
import Img3 from '../images/Yen.png';
import Img4 from '../images/sterling.png';
import Img5 from '../images/peso.png';
import axios from 'axios';



//http://api.cambio.today/v1/full/EUR/json?key=6340%7Cipv0LcG7dSQh2%5E%5EP1CkwqXZ37Zir8gfV

class Widget2 extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.state = {
      result:null,
      nombre: "0",
      devise:"Bitcoin",
      montant:null,
      user: {
        "from": "EUR",
        "conversion": [
          {
            "to": "$",//dollard US
            "date": "2020-11-24T16:00:24",
            "rate": 1.187790
          },
          {
            "to": "Bitcoin",//bitcoin
            "date": "2020-11-24T16:58:02",
            "rate": 0.000062
          },
          {
            "to": "Yuan",//yuan chinois
            "date": "2020-11-24T15:25:02",
            "rate": 7.827533
          },
          {
            "to": "£",//livre sterling
            "date": "2020-11-24T16:59:52",
            "rate": 0.889880
          },
          {

            "to": "Peso",//peso argentin
            "date": "2020-11-24T17:00:01",
            "rate": 95.818981
          }
        ]
      }
    }
  }

 handleChange = (e) => {
    this.setState({
      devise: e.target.value
    })
  }

  handleChange2 = (e) => {
    this.setState({
      montant: e.target.value
    })
  }


   conversion = (e) => {
    e.preventDefault();
    let res = 0; 
    for (let i=0; i<5; i++){
      if (this.state.user.conversion[i].to === this.state.devise){
        res = this.state.user.conversion[i].rate * this.state.montant;
        res = res.toFixed(2);
        this.setState({
          result: res,
          nombre : i
        })
      }
    }
  }



  render()
  {
    return(
      <div className="widget2">
        <div className = "test">
          <div className = "rechercherVille container">   
          <h1>Convertisseur de monnaie </h1>
            <Form onSubmit={this.conversion}>
              <Form.Row className="align-items-center">
                <Col xs="auto">
                  <Form.Label>
                    Devise
                  </Form.Label>
                  <Form.Control
                    className="mb-2"
                    id="devise"
                    placeholder="Devise à convertir"
                    onChange={this.handleChange}
                  />
                </Col>
                <Col xs="auto">
                  <Form.Label>
                    Montant à convertir en €
                  </Form.Label>
                  <Form.Control
                    className="mb-2"
                    type="number"
                    min="0"
                    id="montant"
                    placeholder="Montant"
                    onChange={this.handleChange2}
                  />
                </Col>
              </Form.Row>
              <Button type="submit" variant="success" className="mb-2" onClick={(e) => this.conversion()}>
                Convertir 
              </Button>
            </Form>
          </div>
          <p> {this.state.montant} € =  {this.state.result} {!!this.state.ddevise.result &&(this.state.ddevise.result.conversion[this.state.nombre].to)} </p>
        </div>  
        <div className="container-fluid">{!!this.state.meteo &&(<>{this.state.meteo.weather[0].main}</>)}
          <h1>Devises principales {!!this.state.ddevise.result &&(<>{this.state.ddevise.result.from}</>)}</h1>
          <p> <img src={Img1} />  {!!this.state.ddevise.result &&(this.state.ddevise.result.conversion[1].rate)} &emsp; <img src={Img2} />  {!!this.state.ddevise.result &&(this.state.ddevise.result.conversion[0].rate)} </p>
          <p> <img src={Img3} />  {!!this.state.ddevise.result &&(this.state.ddevise.result.conversion[2].rate)} &emsp; <img src={Img4} />  {!!this.state.ddevise.result &&(this.state.ddevise.result.conversion[3].rate)} </p>
          <p> <img src={Img5} />  {!!this.state.ddevise.result &&(this.state.ddevise.result.conversion[4].rate)} </p>
      </div>
      </div>
    );
  }
}
export default Widget2;*/
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Img1 from '../images/dollar-symbol.png';
import Img2 from '../images/bitcoin.png';
import Img3 from '../images/Yen.png';
import Img4 from '../images/sterling.png';
import Img5 from '../images/peso.png';



class Widget2 extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.state = {
      result:null,
      nombre: "0",
      devise:"Bitcoin",
      montant:null,
      user: {
        "from": "EUR",
        "conversion": [
      {
        "to": "AED",
        "date": "2020-11-28T00:11:20",
        "rate": 4.396457
      },
      {
        "to": "AFN",
        "date": "2020-11-28T00:11:20",
        "rate": 91.932009
      },
      {
        "to": "ALL",
        "date": "2020-11-27T18:43:58",
        "rate": 123.533637
      },
      {
        "to": "AMD",
        "date": "2020-11-27T12:00:17",
        "rate": 607.744793
      },
      {
        "to": "AOA",
        "date": "2020-11-27T14:26:16",
        "rate": 767.604740
      },
      {
        "to": "ARS",
        "date": "2020-11-28T00:11:20",
        "rate": 96.837443
      },
      {
        "to": "AUD",
        "date": "2020-11-27T22:29:51",
        "rate": 1.619823
      },
      {
        "to": "AWG",
        "date": "2020-11-28T00:11:20",
        "rate": 2.130716
      },
      {
        "to": "AZN",
        "date": "2020-11-27T05:01:06",
        "rate": 2.034355
      },
      {
        "to": "BAM",
        "date": "2020-11-27T22:28:51",
        "rate": 1.959540
      },
      {
        "to": "BBD",
        "date": "2020-11-28T00:00:41",
        "rate": 2.394063
      },
      {
        "to": "BDT",
        "date": "2020-11-28T00:11:20",
        "rate": 101.424467
      },
      {
        "to": "BGN",
        "date": "2020-11-27T15:18:11",
        "rate": 1.963754
      },
      {
        "to": "BHD",
        "date": "2020-11-28T00:11:20",
        "rate": 0.451281
      },
      {
        "to": "BIF",
        "date": "2020-11-28T00:11:20",
        "rate": 2305.087383
      },
      {
        "to": "BMD",
        "date": "2020-11-28T00:00:41",
        "rate": 1.197031
      },
      {
        "to": "BND",
        "date": "2020-11-28T00:11:20",
        "rate": 1.602107
      },
      {
        "to": "BOB",
        "date": "2020-11-28T00:11:20",
        "rate": 8.163754
      },
      {
        "to": "BRL",
        "date": "2020-11-28T00:11:20",
        "rate": 6.398851
      },
      {
        "to": "BSD",
        "date": "2020-11-28T00:11:20",
        "rate": 1.197031
      },
      {
        "to": "BTC",
        "date": "2020-11-28T00:57:02",
        "rate": 0.000070
      },
      {
        "to": "BTN",
        "date": "2020-11-27T15:45:46",
        "rate": 88.424707
      },
      {
        "to": "BWP",
        "date": "2020-11-27T14:53:52",
        "rate": 13.191764
      },
      {
        "to": "BYN",
        "date": "2020-11-28T00:11:20",
        "rate": 3.088341
      },
      {
        "to": "BZD",
        "date": "2020-11-28T00:11:20",
        "rate": 2.391310
      },
      {
        "to": "CAD",
        "date": "2020-11-28T00:11:20",
        "rate": 1.554944
      },
      {
        "to": "CDF",
        "date": "2020-11-28T00:11:20",
        "rate": 2346.935600
      },
      {
        "to": "CHF",
        "date": "2020-11-27T22:00:02",
        "rate": 1.081877
      },
      {
        "to": "CLP",
        "date": "2020-11-27T23:52:02",
        "rate": 919.499641
      },
      {
        "to": "CNY",
        "date": "2020-11-28T00:11:20",
        "rate": 7.869045
      },
      {
        "to": "COP",
        "date": "2020-11-28T00:11:20",
        "rate": 4315.178358
      },
      {
        "to": "CRC",
        "date": "2020-11-28T00:11:20",
        "rate": 721.199425
      },
      {
        "to": "CUP",
        "date": "2020-11-28T00:28:53",
        "rate": 29.925186
      },
      {
        "to": "CVE",
        "date": "2020-11-28T00:11:20",
        "rate": 110.485995
      },
      {
        "to": "CZK",
        "date": "2020-11-28T00:11:20",
        "rate": 26.195834
      },
      {
        "to": "DJF",
        "date": "2020-11-28T00:11:20",
        "rate": 211.994254
      },
      {
        "to": "DKK",
        "date": "2020-11-27T22:00:09",
        "rate": 7.445296
      },
      {
        "to": "DOP",
        "date": "2020-11-28T00:11:20",
        "rate": 69.475700
      },
      {
        "to": "DZD",
        "date": "2020-11-28T00:11:20",
        "rate": 154.129758
      },
      {
        "to": "EGP",
        "date": "2020-11-28T00:11:20",
        "rate": 18.661719
      },
      {
        "to": "ERN",
        "date": "2020-11-28T00:11:20",
        "rate": 18.039263
      },
      {
        "to": "ETB",
        "date": "2020-11-27T18:40:37",
        "rate": 44.170457
      },
      {
        "to": "ETH",
        "date": "2020-11-28T00:57:02",
        "rate": 0.002311
      },
      {
        "to": "FJD",
        "date": "2020-11-27T18:48:49",
        "rate": 2.467082
      },
      {
        "to": "GBP",
        "date": "2020-11-27T22:29:51",
        "rate": 0.899066
      },
      {
        "to": "GEL",
        "date": "2020-11-27T12:00:17",
        "rate": 3.954633
      },
      {
        "to": "GHS",
        "date": "2020-11-28T00:11:20",
        "rate": 6.941585
      },
      {
        "to": "GIP",
        "date": "2020-11-27T23:13:52",
        "rate": 0.898611
      },
      {
        "to": "GMD",
        "date": "2020-11-27T17:24:26",
        "rate": 61.647115
      },
      {
        "to": "GNF",
        "date": "2020-11-28T00:11:20",
        "rate": 11742.087623
      },
      {
        "to": "GTQ",
        "date": "2020-11-28T00:11:20",
        "rate": 9.360187
      },
      {
        "to": "GYD",
        "date": "2020-11-28T00:11:20",
        "rate": 248.360067
      },
      {
        "to": "HKD",
        "date": "2020-11-28T00:11:20",
        "rate": 9.277831
      },
      {
        "to": "HNL",
        "date": "2020-11-28T00:11:20",
        "rate": 28.935719
      },
      {
        "to": "HRK",
        "date": "2020-11-27T14:52:01",
        "rate": 7.569308
      },
      {
        "to": "HTG",
        "date": "2020-11-28T00:11:20",
        "rate": 78.405554
      },
      {
        "to": "HUF",
        "date": "2020-11-28T00:11:20",
        "rate": 361.635145
      },
      {
        "to": "IDR",
        "date": "2020-11-28T00:11:20",
        "rate": 16926.023462
      },
      {
        "to": "ILS",
        "date": "2020-11-28T00:11:20",
        "rate": 3.969835
      },
      {
        "to": "INR",
        "date": "2020-11-28T00:11:20",
        "rate": 88.484558
      },
      {
        "to": "IQD",
        "date": "2020-11-28T00:11:20",
        "rate": 1423.270290
      },
      {
        "to": "IRR",
        "date": "2020-11-28T00:11:20",
        "rate": 50275.317213
      },
      {
        "to": "ISK",
        "date": "2020-11-27T18:44:07",
        "rate": 158.965765
      },
      {
        "to": "JMD",
        "date": "2020-11-28T00:11:20",
        "rate": 174.000479
      },
      {
        "to": "JOD",
        "date": "2020-11-28T00:11:20",
        "rate": 0.847498
      },
      {
        "to": "JPY",
        "date": "2020-11-27T21:59:59",
        "rate": 124.593009
      },
      {
        "to": "KES",
        "date": "2020-11-28T00:11:20",
        "rate": 131.673450
      },
      {
        "to": "KGS",
        "date": "2020-11-26T10:01:15",
        "rate": 101.477137
      },
      {
        "to": "KHR",
        "date": "2020-11-28T00:11:20",
        "rate": 4820.361503
      },
      {
        "to": "KMF",
        "date": "2020-11-28T00:11:20",
        "rate": 493.440268
      },
      {
        "to": "KPW",
        "date": "2020-11-28T00:00:41",
        "rate": 1077.328226
      },
      {
        "to": "KRW",
        "date": "2020-11-28T00:11:20",
        "rate": 1322.025377
      },
      {
        "to": "KWD",
        "date": "2020-11-28T00:11:20",
        "rate": 0.365214
      },
      {
        "to": "KYD",
        "date": "2020-11-28T00:00:41",
        "rate": 0.981566
      },
      {
        "to": "KZT",
        "date": "2020-11-28T00:11:20",
        "rate": 507.984199
      },
      {
        "to": "LAK",
        "date": "2020-11-28T00:11:20",
        "rate": 11064.735456
      },
      {
        "to": "LBP",
        "date": "2020-11-28T00:11:20",
        "rate": 1800.323198
      },
      {
        "to": "LKR",
        "date": "2020-11-27T09:43:07",
        "rate": 221.633948
      },
      {
        "to": "LRD",
        "date": "2020-11-28T00:11:20",
        "rate": 187.335408
      },
      {
        "to": "LSL",
        "date": "2020-11-27T17:42:54",
        "rate": 18.254728
      },
      {
        "to": "LTC",
        "date": "2020-11-28T00:58:02",
        "rate": 0.017171
      },
      {
        "to": "LYD",
        "date": "2020-11-28T00:11:20",
        "rate": 1.610965
      },
      {
        "to": "MAD",
        "date": "2020-11-28T00:11:20",
        "rate": 10.843309
      },
      {
        "to": "MDL",
        "date": "2020-11-28T00:11:20",
        "rate": 20.482404
      },
      {
        "to": "MGA",
        "date": "2020-11-27T18:41:07",
        "rate": 4476.897295
      },
      {
        "to": "MKD",
        "date": "2020-11-28T00:11:20",
        "rate": 61.527412
      },
      {
        "to": "MMK",
        "date": "2020-11-28T00:11:20",
        "rate": 1570.505147
      },
      {
        "to": "MNT",
        "date": "2020-11-28T00:11:20",
        "rate": 3411.694996
      },
      {
        "to": "MOP",
        "date": "2020-11-28T00:38:53",
        "rate": 9.556141
      },
      {
        "to": "MUR",
        "date": "2020-11-28T00:11:20",
        "rate": 47.522145
      },
      {
        "to": "MVR",
        "date": "2020-11-28T00:11:20",
        "rate": 18.637778
      },
      {
        "to": "MWK",
        "date": "2020-11-28T00:11:20",
        "rate": 893.583912
      },
      {
        "to": "MXN",
        "date": "2020-11-28T00:11:20",
        "rate": 23.986114
      },
      {
        "to": "MYR",
        "date": "2020-11-28T00:11:20",
        "rate": 4.868327
      },
      {
        "to": "NAD",
        "date": "2020-11-28T00:11:20",
        "rate": 18.264305
      },
      {
        "to": "NGN",
        "date": "2020-11-27T17:59:07",
        "rate": 451.280824
      },
      {
        "to": "NIO",
        "date": "2020-11-27T18:45:37",
        "rate": 41.357434
      },
      {
        "to": "NOK",
        "date": "2020-11-27T22:00:09",
        "rate": 10.561647
      },
      {
        "to": "NPR",
        "date": "2020-11-27T09:43:07",
        "rate": 141.153938
      },
      {
        "to": "NZD",
        "date": "2020-11-27T22:29:51",
        "rate": 1.703376
      },
      {
        "to": "OMR",
        "date": "2020-11-28T00:11:20",
        "rate": 0.460737
      },
      {
        "to": "PAB",
        "date": "2020-11-28T00:00:41",
        "rate": 1.197031
      },
      {
        "to": "PEN",
        "date": "2020-11-28T00:11:20",
        "rate": 4.302610
      },
      {
        "to": "PGK",
        "date": "2020-11-27T18:42:07",
        "rate": 4.141729
      },
      {
        "to": "PHP",
        "date": "2020-11-28T00:11:20",
        "rate": 57.589179
      },
      {
        "to": "PKR",
        "date": "2020-11-28T00:11:20",
        "rate": 190.579363
      },
      {
        "to": "PLN",
        "date": "2020-11-28T00:11:20",
        "rate": 4.478214
      },
      {
        "to": "PYG",
        "date": "2020-11-28T00:11:20",
        "rate": 8436.892507
      },
      {
        "to": "QAR",
        "date": "2020-11-28T00:11:20",
        "rate": 4.357194
      },
      {
        "to": "RON",
        "date": "2020-11-27T22:22:54",
        "rate": 4.828944
      },
      {
        "to": "RSD",
        "date": "2020-11-27T08:30:13",
        "rate": 117.646517
      },
      {
        "to": "RUB",
        "date": "2020-11-28T00:11:20",
        "rate": 90.740962
      },
      {
        "to": "RWF",
        "date": "2020-11-28T00:11:20",
        "rate": 1147.151065
      },
      {
        "to": "SAR",
        "date": "2020-11-27T21:59:29",
        "rate": 4.488987
      },
      {
        "to": "SBD",
        "date": "2020-11-27T19:13:52",
        "rate": 9.573258
      },
      {
        "to": "SCR",
        "date": "2020-11-28T00:11:20",
        "rate": 24.476179
      },
      {
        "to": "SEK",
        "date": "2020-11-27T22:00:10",
        "rate": 10.151185
      },
      {
        "to": "SGD",
        "date": "2020-11-27T22:00:15",
        "rate": 1.602107
      },
      {
        "to": "SLL",
        "date": "2020-11-28T00:11:20",
        "rate": 11879.099832
      },
      {
        "to": "SOS",
        "date": "2020-11-27T17:51:07",
        "rate": 685.898971
      },
      {
        "to": "SRD",
        "date": "2020-11-28T00:11:20",
        "rate": 16.782380
      },
      {
        "to": "SVC",
        "date": "2020-11-28T00:00:41",
        "rate": 10.474024
      },
      {
        "to": "SYP",
        "date": "2020-11-28T00:11:20",
        "rate": 1503.471391
      },
      {
        "to": "SZL",
        "date": "2020-11-28T00:11:20",
        "rate": 18.231386
      },
      {
        "to": "THB",
        "date": "2020-11-28T00:11:20",
        "rate": 36.270050
      },
      {
        "to": "TND",
        "date": "2020-11-28T00:11:20",
        "rate": 3.264305
      },
      {
        "to": "TOP",
        "date": "2020-11-28T00:38:53",
        "rate": 2.733661
      },
      {
        "to": "TRY",
        "date": "2020-11-28T00:11:20",
        "rate": 9.376586
      },
      {
        "to": "TTD",
        "date": "2020-11-28T00:11:20",
        "rate": 8.052430
      },
      {
        "to": "TWD",
        "date": "2020-11-28T00:11:20",
        "rate": 34.120182
      },
      {
        "to": "TZS",
        "date": "2020-11-28T00:11:20",
        "rate": 2769.930572
      },
      {
        "to": "UAH",
        "date": "2020-11-28T00:11:20",
        "rate": 34.031602
      },
      {
        "to": "UGX",
        "date": "2020-11-28T00:11:20",
        "rate": 4419.439789
      },
      {
        "to": "USD",
        "date": "2020-11-28T00:00:41",
        "rate": 1.197031
      },
      {
        "to": "UYU",
        "date": "2020-11-28T00:11:20",
        "rate": 51.036629
      },
      {
        "to": "UZS",
        "date": "2020-11-27T18:46:37",
        "rate": 12413.215226
      },
      {
        "to": "VND",
        "date": "2020-11-28T00:11:20",
        "rate": 27742.398851
      },
      {
        "to": "VUV",
        "date": "2020-11-28T00:11:20",
        "rate": 131.086904
      },
      {
        "to": "WST",
        "date": "2020-11-28T00:38:53",
        "rate": 3.098157
      },
      {
        "to": "YER",
        "date": "2020-11-27T17:46:07",
        "rate": 299.018434
      },
      {
        "to": "ZAR",
        "date": "2020-11-28T00:11:20",
        "rate": 18.264664
      }
    ]
    }}}
  

  handleChange = (e) => {
    this.setState({
      devise: e.target.value
    })
  }

  handleChange2 = (e) => {
    this.setState({
      montant: e.target.value
    })
  }

  conversion = (e) => {
    e.preventDefault();
    let res = 0; 
    for (let i=0; i<141; i++){
      if (this.state.user.conversion[i].to === this.state.devise){
        res = this.state.user.conversion[i].rate * this.state.montant;
        res = res.toFixed(2);
        this.setState({
          result: res,
          nombre : i
        })
      }
    }
  }



  render()
  {
    return(
      <div className="widget2">
        <div className = "test">
          <div className = "rechercherVille container">   
          <h1>Convertisseur de monnaie </h1>
            <Form onSubmit={this.conversion}>
              <Form.Row className="align-items-center">
                <Col xs="auto">
                  <Form.Label>
                    Devise
                  </Form.Label>
                  <Form.Control
                    className="mb-2"
                    id="devise"
                    placeholder="Devise à convertir"
                    onChange={this.handleChange}
                  />
                </Col>
                <Col xs="auto">
                  <Form.Label>
                    Montant à convertir en €
                  </Form.Label>
                  <Form.Control
                    className="mb-2"
                    type="number"
                    min="0"
                    id="montant"
                    placeholder="Montant"
                    onChange={this.handleChange2}
                  />
                </Col>
              </Form.Row>
              <Button type="submit" variant="success" className="mb-2" /*onClick={() => convertionMonnaie()}*/>
                Convertir 
              </Button>
            </Form>
          </div>
          <p> {this.state.montant} € =  {this.state.result} {this.state.user.conversion[this.state.nombre].to} </p>
        </div>  
        <div className="container-fluid">
          <h1>Devises principales</h1>
          <p> <img src={Img1} />  {this.state.user.conversion[133].rate} &emsp; <img src={Img2} />  {this.state.user.conversion[20].rate} </p>
          <p> <img src={Img3} />  {this.state.user.conversion[29].rate} &emsp; <img src={Img4} />  {this.state.user.conversion[44].rate} </p>
          <p> <img src={Img5} />  {this.state.user.conversion[5].rate} </p>
      </div>
      </div>
    );
  }
}
export default Widget2;