import React from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends React.Component {
	render () {
		return (
			<div>
				<Link to="/">
					Home
				</Link>
				<Link to="/about">
					About
				</Link>
				<Link to="/works">
					Works
				</Link>
			</div>
		)
	}
}