import React, { Component } from 'react'
import { loadIssues } from '../../storage';
import { IssuesTable } from '../../components';

class IssuesViewer extends Component {

	issues = null;

	componentDidMount() {
		this.issues = loadIssues();
	}

	render() {
		return (
			<div>
				<h1>React Project Issue Status</h1>
				
				<IssuesTable issues={this.issues} />

				<p>
					Rendered using <b>IssuesTable</b> component based on <a href="https://react.semantic-ui.com/collections/table">Semantic UI</a> 
				</p>
			</div>
		)
	}
}

export default IssuesViewer