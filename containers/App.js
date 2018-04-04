import React, {Component} from 'react';
import InputPreview from '../components/InputPreview';
import NavBar from '../components/NavBar';
import {connect} from 'react-redux';
import {setMessage} from '../actions/message';

class App extends Component {
  _onClick = (value) => {
    this.props.dispatch(setMessage(value))
  }
  render () {
   	const {message} = this.props.messageReducer;
   	return (
   		<div>
        <NavBar />
        <h2>Home</h2>
     		<InputPreview value={message} onClick={this._onClick}/>
        <p>{message}</p>
   		</div>
   	)
  }
}
export default connect(state => state)(App);