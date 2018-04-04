import React from 'react';

export default class InputPreview extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	handleClick(event) {
		this.props.onClick(this.state.value)
	}
	render () {
		return (
			<div>
				<input type="text" value={this.state.value} onChange={this.handleChange} />
				<input type="submit" value="Submit" onClick={this.handleClick} />
			</div>
		)
	}
}