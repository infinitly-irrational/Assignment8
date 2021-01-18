import React from 'react';
import TableCell from './TableCell';
import './TableColor.css';

class TableRow extends React.Component {
	constructor(props) {
		super(props);
		this.updateColorOfCellPipe = this.updateColorOfCellPipe.bind(this);
	}
	updateColorOfCellPipe(x) {
		this.props.updateColorOfCell(x, this.props.index);
	}
	render() {
		return (
			<tr>
				{this.props.row.map((cellColor, xIndex) => {
					return (
						<TableCell
							key={xIndex}
							index={xIndex}
							color={cellColor}
							updateColorOfCell={this.updateColorOfCellPipe}></TableCell>
					);
				})}
			</tr>
		);
	}
}

export default TableRow;
