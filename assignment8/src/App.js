import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import './TableColor.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { backgroundColor: 'white' };
		this.myStyle = this.myStyle.bind(this);
		this.getColor = this.getColor.bind(this);
	}
	myStyle(event) {
		const val = event.target.value;
		console.log(val);
		this.setState({ backgroundColor: event.target.value });
		console.log(this.state);
	}
	getColor() {
		return this.state.backgroundColor;
	}
	render() {
		return (
			<div className="App">
				<div id="colorPicker">
					<form>
						<label for="color">Select a color:</label>
						<select onChange={this.myStyle}>
							<option id="white" value="white">
								White
							</option>
							<option id="red" value="red">
								Red
							</option>
							<option id="green" value="green">
								Green
							</option>
							<option id="blue" value="blue">
								Blue
							</option>
							<option id="black" value="black">
								Black
							</option>
						</select>
					</form>
				</div>
				<Table id="table" getColor={this.getColor} dimensions={{ x: 2, y: 3 }} />
			</div>
		);
	}
}

export default App;
