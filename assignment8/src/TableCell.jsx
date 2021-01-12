import React, { Component } from 'react';

class TableCell extends Component {
	constructor(props) {
		super(props);
		this.state = { Color: props.color };
	}
	render() {
		return <td style={{ backgroundColor: this.state.color }}></td>;
	}
}

export default TableCell;
