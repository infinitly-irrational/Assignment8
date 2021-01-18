import React, { Component } from 'react';
import './TableColor.css';

class TableCell extends Component {
	constructor(props) {
		super(props);
		this.updateCellColorPipe = this.updateCellColorPipe.bind(this);
	}
	updateCellColorPipe() {
		this.props.updateColorOfCell(this.props.index);
	}
	render() {
		return <td style={{ backgroundColor: this.props.color }} onClick={this.updateCellColorPipe}></td>;
	}
}

export default TableCell;
