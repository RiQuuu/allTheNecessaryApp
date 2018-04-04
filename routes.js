import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './containers/App';
import About from './containers/About';
import Works from './containers/Works';

export default () => {
 	return (
   		<BrowserRouter>
   			<Switch>
   				<Route exact path='/' component={App}/>
   				<Route path='/about' component={About}/>
   				<Route path='/works' component={Works}/>
   			</Switch>
   		</BrowserRouter>
 	)
}