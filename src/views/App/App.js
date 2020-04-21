import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from '../Landing';
import './App.scss';

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Router>
					<div className="header">
						<h1 className="text-center">Top GitHub Repos</h1>
					</div>
					<Switch>
						<Route exact path="/" component={Landing} />
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App;