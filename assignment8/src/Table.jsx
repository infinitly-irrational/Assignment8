import React from 'react'
import TableRow from "./TableRow"

class Table extends React.Component{
    constructor(props){
        super(props)
        this.state={
            rows: ['row']
        }
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this)
        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this)
    }


    handleAddButtonClick(){
        var rows = this.state.rows
        rows.push('new row')
        this.setState({rows: rows})
        
        console.log(rows)
        console.log('add button clicked')

    }

    handleDeleteButtonClick(){
        var rows = this.state.rows
        rows.pop()
        this.setState({rows: rows})
        console.log('delete button clicked')
        console.log(rows)
        console.log('delete button clicked')
    }

    render(){
        return(
            <div>
                <button onClick={this.handleAddButtonClick}>Add Row</button>
                <button onClick={this.handleDeleteButtonClick}>Delete Row</button>
                <table className="table">
                    <tbody>
                    {this.state.rows.map((r, index) => (
                      <TableRow key={index}></TableRow>
                    ))}
                    </tbody>
                    
                </table>
            </div>
        )
    }
}

export default Table;