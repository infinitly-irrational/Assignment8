import React from 'react'
import TableRow from "./TableRow"

class Table extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <table>
                    <TableRow></TableRow>

                </table>
            </div>
        )
    }
}

export default Table;