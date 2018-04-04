import React from 'react';

export default class WorksListItem extends React.Component {
	render() {
		return (
			<div>
				<h3>{this.props.name}</h3>
				<p>{this.props.info}</p>
			</div>
		)
	}	
}