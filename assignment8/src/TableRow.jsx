import React from 'react';
import TableCell from './TableCell';

class TableRow extends React.Component {
	constructor(props) {
		super(props);
		this.state = { row: props.row };
	}
	render() {
		return (
			<tr>
				{this.state.row.map((cellColor, xIndex) => {
					return <TableCell key={xIndex} color={cellColor}></TableCell>;
				})}
			</tr>
		);
	}
}

export default TableRow;
