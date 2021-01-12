import React from 'react'
import './App.css';
import TableRow from "./TableRow"

class Table extends React.Component{
    constructor(props){
        super(props)
        this.state={
            rows: [1],
            column: [1]
        }
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this)
        this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this)
        this.addColumnButton = this.addColumnButton.bind(this)
        this.deleteColumnButton = this.deleteColumnButton.bind(this)
    }


    handleAddButtonClick(){
        var rows = this.state.rows
        rows.push(rows.length + 1)
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
        
    }

    addColumnButton(){
        var column = this.state.column
        column.push(column.length+1)
        this.setState({column: column})
        console.log("add column clicked")
        console.log(column)
        return <TableRow columnAmount = {column}></TableRow>
        

    }

    deleteColumnButton(){
        var column = this.state.column
        column.pop()
        this.setState({column: column})
        console.log("delete column clicked")
        console.log(column)
        return <TableRow columnAmount = {column}></TableRow>
    }

    render(){
        return(
            <div>
                <button onClick={this.handleAddButtonClick}>Add Row</button>
                <button onClick={this.handleDeleteButtonClick}>Delete Row</button>
                <button onClick={this.addColumnButton}>Add Column</button>
                <button onClick={this.deleteColumnButton}>Delete Column</button>
                <br></br>
                <table className="table">
                    <tbody>
                    {this.state.rows.map((r, index) => (
                      <TableRow key={index} columnAmount = {this.state.column}></TableRow>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;