import React from 'react'
import { Table } from 'semantic-ui-react'

/**
 * Renders Table Cell with <ul> list of props.labels
 */
const issueLabels = ({ labels }) => (
	<Table.Cell>
		<ul>
			{labels.map(el => <li key={el.id}>{el.name}</li>)}
		</ul>
	</Table.Cell>
);

export default issueLabels