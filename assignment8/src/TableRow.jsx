import React from 'react'
import TableCell from "./TableCell"

class TableRow extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
                <tr className="tableRows">
                    <TableCell></TableCell>
                </tr>
        )
    }
}

export default TableRow;