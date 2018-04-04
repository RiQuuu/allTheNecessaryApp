import React from 'react';
import NavBar from '../components/NavBar';
import WorksListItem from '../components/WorksListItem';

export default class Works extends React.Component {
 	render () {
   		return (
     		<div>
     			<NavBar />
       			<h2>Works</h2>
       			<WorksListItem name="project" info="Lorem ipsum" />
       			<WorksListItem name="project2" info="Lorem ipsum" />
       			<WorksListItem name="project3" info="Lorem ipsum" />
     		</div>
   		)
 	}
}