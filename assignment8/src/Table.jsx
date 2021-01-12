import React from 'react';
import TableCell from './TableCell';
import TableRow from './TableRow';

const defaultColor = 'rgb(255, 255, 255)';

class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = { defaultColor: props.color != undefined ? props.color : defaultColor, tableMatrix: [] };
		this.populateTable = this.populateTable.bind(this);

		this.handleAddButtonClick = this.handleAddButtonClick.bind(this)
		this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this)
	}
	componentDidMount() {
		console.log('mounting');
		let { x, y } = this.props.dimensions;
		this.setState({ tableMatrix: this.populateTable(y, x) });
		console.log(this.state);
	}
	populateTable(height = 1, width = 1) {
		console.log('populating table');
		let matrix =
			this.state.tableMatrix !== undefined
				? this.state.tableMatrix
				: new Array(height).fill(new Array(width).fill(this.state.defaultColor));

		for (let y = matrix.length; y < height; y++) {
			if (matrix[y] === undefined) matrix[y] = new Array(width).fill(this.state.defaultColor);
			else if (matrix[y].length < width) matrix[y].fill(this.state.defaultColor, matrix[y].length, width);
		}
		return matrix;
	}
	handleAddButtonClick(){
			var rows = this.state.rows
			rows.push('new row')
			this.setState({rows: rows})

			console.log(rows)
			console.log('add button clicked')

	}

	handleDeleteButtonClick(){
			var rows = this.state.rows
			rows.pop()
			this.setState({rows: rows})
			console.log('delete button clicked')
			console.log(rows)
			console.log('delete button clicked')
	}
	render() {
		return (
		<div>
				<button onClick={this.handleAddButtonClick}>Add Row</button>
				<button onClick={this.handleDeleteButtonClick}>Delete Row</button>
				<table className="table">
					<tbody>
						{this.state.tableMatrix.map((row, yIndex) => {
							return <TableRow key={yIndex} row={row} />;
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Table;
