import "./App.css";
import Table from "./Table";
import "./TableColor.css";

function App() {
  function myStyle(event) {
    const val = event.target.value;

    return { backgroundColor: val };
  }

  return (
    <div className="App">
      <div id="colorPicker">
        <form>
          <label for="color">Select a color:</label>
          <select onChange={myStyle}>
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
      <Table id="table" style={{ myStyle }} dimensions={{ x: 2, y: 3 }} />
    </div>
  );
}

export default App;
