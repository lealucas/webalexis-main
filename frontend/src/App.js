import React from 'react';
import './App.css';
import Header from './containers/header';
import Footer from './containers/footer';
import Dashboard from './containers/Dashboard';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Admin from './containers/Admin';


class App extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			dashboard: true,

		}
	}


  render()
  {
  	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route path="/admin" component={Admin} />
				</Switch>
				<Footer />
			</Router>
		</div>
  		);
	}
}

export default App;
