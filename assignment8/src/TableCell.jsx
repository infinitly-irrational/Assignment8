import React, { Component } from "react";
import { defaultColor } from "./Table";
import "./TableColor.css";

class TableCell extends Component {
  constructor(props) {
    super(props);
    this.state = { Color: props.color };
    this.updateCellColorPipe = this.updateCellColorPipe.bind(this);
  }
  updateCellColorPipe() {
    this.props.updateColorOfCell(this.props.index, this.getColor());
  }
  getColor() {
    console.log("fetching color");
    return defaultColor;
  }
  render() {
    return (
      <td
        style={{ backgroundColor: this.state.color }}
        onClick={this.updateCellColorPipe}
      ></td>
    );
  }
}

export default TableCell;
