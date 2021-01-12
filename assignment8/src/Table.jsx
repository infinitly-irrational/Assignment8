import React from 'react';
import TableCell from './TableCell';
import TableRow from './TableRow';

const defaultColor = 'rgb(255, 255, 255)';

class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = { defaultColor: props.color !== undefined ? props.color : defaultColor, tableMatrix: [] };
		this.populateTable = this.populateTable.bind(this);

		this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
		this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
		this.updateColorOfCell = this.updateColorOfCell.bind(this);
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

		for (let y = 0; y < height; y++) {
			if (matrix[y] === undefined) matrix[y] = new Array(width).fill(this.state.defaultColor);
			else {
				console.log(matrix[y].length);
				while (matrix[y].length < width) {
					matrix[y].push(this.state.defaultColor);
				}
				while (matrix[y].length > width) {
					matrix[y].pop();
				}
			}
		}
		while (matrix.length > height) {
			matrix.pop();
		}
		return matrix;
	}
	handleAddButtonClick() {
		let y = this.state.tableMatrix.length + 1;
		let x = this.state.tableMatrix[0].length;
		let newMatrix = this.populateTable(y, x);
		this.setState({ tableMatrix: newMatrix });
	}

	handleDeleteButtonClick() {
		let y = this.state.tableMatrix.length - 1;
		let x = this.state.tableMatrix[0].length;
		let newMatrix = this.populateTable(y, x);
		this.setState({ tableMatrix: newMatrix });
	}

	updateColorOfCell(x = 0, y = 0, color = this.defaultColor) {
		let matrix = this.state.tableMatrix;
		matrix[y][x] = color;
		this.setState({ tableMatrix: matrix });
	}
	render() {
		return (
			<div>
				<button onClick={this.handleAddButtonClick}>Add Row</button>
				<button onClick={this.handleDeleteButtonClick}>Delete Row</button>
				<table className="table">
					<tbody>
						{this.state.tableMatrix.map((row, yIndex) => {
							return (
								<TableRow
									key={yIndex}
									index={yIndex}
									row={row}
									updateColorOfCell={this.updateColorOfCell}
								/>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Table;
export { defaultColor };
