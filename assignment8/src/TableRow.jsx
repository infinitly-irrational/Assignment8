import React from "react";
import TableCell from "./TableCell";
import "./TableColor.css";

class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { row: props.row };
    this.updateColorOfCellPipe = this.updateColorOfCellPipe.bind(this);
  }
  updateColorOfCellPipe(x, color) {
    this.props.updateColorOfCell(this.props.index, x, color);
  }
  render() {
    return (
      <tr>
        {this.state.row.map((cellColor, xIndex) => {
          return (
            <TableCell
              key={xIndex}
              index={xIndex}
              color={cellColor}
              updateColorOfCell={this.updateColorOfCellPipe}
            ></TableCell>
          );
        })}
      </tr>
    );
  }
}

export default TableRow;
