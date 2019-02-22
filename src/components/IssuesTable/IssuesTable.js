import React from 'react'
import IssueLabels from './IssueLabels'
import { Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css' // CSS Styles for Semantic UI

/**
 * Renders Semantic UI Table with issues.
 * Shows empty "placeholder" if there is no issue.
 * @param {Array<Object>} props.issues - Array of "issue" objects 
 */
const issuesTable = (props) => {
	const { issues } = props;
	const issuesAreEmpty = !(Array.isArray(issues) && issues.length > 0);
	//console.log('issuesTable(), issuesAreEmpty: %s, issues: ', issuesAreEmpty, issues);

	// Header of the Table
	const headerRow = ['Issue Number', 'Title', 'Created At', 'Updated At', 'Labels', 'State']

	// Returns array of "row" objects
	const getTableData = () => {
		const result = []; 
		if (issuesAreEmpty) return result; // There is no issues
		// Create "row" object for every issue
		issues.forEach(issue => {
			const row = {
				number: issue.number,
				title: issue.title,
				createdAt: issue.created_at,
				updatedAt: issue.updated_at,
				labels: issue.labels, // Labels is array of "label" object
				state: issue.state
			}
			result.push(row);
			//console.log('Row created:', row);
		});
		return result;
	}

	// Renders single "row" (actually transforms data) using data from "row" object
	const renderBodyRow = ({ number, title, createdAt, updatedAt, labels, state }, i) => {
		const result = {
			key: `row-${number}`,
			cells: [
				number,
				title,
				createdAt,
				updatedAt,
				// Labels is array of "label" objects
				<IssueLabels key={`labels-${number}`} labels={labels}/>,
				state
			],
		}
		//console.log('renderBodyRow()', result);
		return result;
	}	

	// Renders Table with list if issues
	const renderFilled = () => {
		return <Table celled headerRow={headerRow} renderBodyRow={renderBodyRow} tableData={getTableData()} />
	}

	// Renders "Empty placeholder"
	const renderEmpty = () => {
		return (
			<Table celled>
				<Table.Body>
					<Table.Row>
						<Table.Cell textAlign='center'>
							There are no issues
        		</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		)
	}

	if (issuesAreEmpty) 
		return renderEmpty(); // No issues
	else 
		return renderFilled(); // List of issues
}

export default issuesTable