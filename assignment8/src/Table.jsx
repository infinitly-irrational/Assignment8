import React from 'react';
import TableCell from './TableCell';
import TableRow from './TableRow';
import './TableColor.css';

const defaultColor = 'white';

class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			defaultColor: props.color !== undefined ? props.color : defaultColor,
			tableMatrix: [],
		};
		this.populateTable = this.populateTable.bind(this);
		this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
		this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
		this.updateColorOfCell = this.updateColorOfCell.bind(this);
		this.addColumnButton = this.addColumnButton.bind(this);
		this.deleteColumnButton = this.deleteColumnButton.bind(this);
		this.fillAll = this.fillAll.bind(this);
		this.clear = this.clear.bind(this);
		this.fillAllUncolored = this.fillAllUncolored.bind(this);
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
		console.log(this.state.tableMatrix);
	}

	handleDeleteButtonClick() {
		let y = this.state.tableMatrix.length - 1;
		let x = this.state.tableMatrix[0].length;
		let newMatrix = this.populateTable(y, x);
		this.setState({ tableMatrix: newMatrix });
		console.log(this.state.tableMatrix);
	}

	updateColorOfCell(x = 0, y = 0, color = this.props.color) {
		let matrix = this.state.tableMatrix;
		matrix[y][x] = color;
		this.setState({ tableMatrix: matrix });
	}

	addColumnButton() {
		let y = this.state.tableMatrix.length;
		let x = this.state.tableMatrix[0].length + 1;
		let newMatrix = this.populateTable(y, x);
		this.setState({ tableMatrix: newMatrix });
		console.log(this.state.tableMatrix);
	}

	deleteColumnButton() {
		let y = this.state.tableMatrix.length;
		let x = this.state.tableMatrix[0].length - 1;
		let newMatrix = this.populateTable(y, x);
		this.setState({ tableMatrix: newMatrix });
		console.log(this.state.tableMatrix);
	}

	fillAll() {
		let matrix = this.state.tableMatrix;
		for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; j < matrix[1].length; j++) {
				matrix[i][j] = this.props.color;
			}
		}
		this.setState({ tableMatrix: matrix });
	}
	clear() {
		let matrix = this.state.tableMatrix;
		for (let i = 0; i < matrix.length; i++) {
			for (let j = 0; j < matrix[1].length; j++) {
				matrix[i][j] = defaultColor;
			}
		}
		this.setState({ tableMatrix: matrix });
	}

	fillAllUncolored() {
		let matrix = this.state.tableMatrix;
		for (let y = 0; y < matrix.length; y++) {
			for (let x = 0; x < matrix[y].length; x++) {
				if (matrix[y][x] === defaultColor || matrix[y][x] === undefined) {
					matrix[y][x] = this.props.color;
				}
			}
		}
		this.setState({ tableMatrix: matrix });
	}

	render() {
		return (
			<div>
				<div className="buttonRow">
					<button className="buttons" onClick={this.handleAddButtonClick}>
						Add Row
					</button>
					<button className="buttons" onClick={this.handleDeleteButtonClick}>
						Delete Row
					</button>
					<button className="buttons" onClick={this.addColumnButton}>
						Add Column
					</button>
					<button className="buttons" onClick={this.deleteColumnButton}>
						Delete Column
					</button>
					<button className="buttons" onClick={this.fillAll}>
						Fill All
					</button>
					<button className="buttons" onClick={this.clear}>
						Clear
					</button>
					<button className="buttons" onClick={this.fillAllUncolored}>
						Fill Uncolored
					</button>
				</div>

				<div>
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
			</div>
		);
	}
}

export default Table;
export { defaultColor };
