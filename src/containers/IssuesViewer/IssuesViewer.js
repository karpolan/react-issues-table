import React, { Component } from 'react'
import { IssuesTable } from '../../components';
import { loadIssues } from '../../storage';

/**
 * Container to present <IssuesTable> component and load "issues" data from the storage. 
 */
class IssuesViewer extends Component {
	state = {
		issues: null
	}

	componentDidMount() {

		const loadData = async () => {
			const newIssues = await loadIssues();
			this.setState({ issues: newIssues });
		}

		loadData();
	} // componentDidMount()

	render() {
		//console.log(this.state.issues);
		return (
			<div>
				<h2>React Project Issue Status</h2>
				<p>
					Rendered using <b>&lt;IssuesTable&gt;</b> component based on <a rel="external noopener noreferrer" target="_blank" href="https://react.semantic-ui.com/collections/table">Semantic UI</a>
				</p>

				<IssuesTable issues={this.state.issues} />

			</div>
		)
	} // render()

}

export default IssuesViewer