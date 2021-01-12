import React from 'react'
import TableRow from "./TableRow"

class Table extends React.Component{
    constructor(props){
        super(props)
        this.state={
            rows: ['row']
        }
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }
    handleButtonClick(){
        var rows = this.state.rows
        rows.push('new row')
        this.setState({rows: rows})

    }
    render(){
        return(
            <div>
                <button onClick={this.handleButtonClick}>Add Row</button>
                <table className="table">
                    {this.state.rows.map((r) => (
                      <TableRow></TableRow>
                    ))}
                    
                </table>
            </div>
        )
    }
}

export default Table;