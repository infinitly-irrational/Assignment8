import './App.css';
import React from 'react'
import TableCell from "./TableCell"

class TableRow extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props.columnAmount)
        let arr = Array.from(this.props.columnAmount)
        console.log(arr)
    }
    render(){
        return(
                <tr className="tableRows">
                   {Array.from(this.props.columnAmount).map((r, index) => (
                      <TableCell>R</TableCell>
                    ))} 
                    
                </tr>
        )
    }
}

export default TableRow;