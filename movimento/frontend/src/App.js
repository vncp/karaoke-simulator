import logo from "./logo.svg";
import classes from "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    name: "Vincent",
  };
  nameChangedHandler = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={(event) => this.nameChangedHandler(event)}
          value={this.state.name}
        ></input>
      </div>
    );
  }
}

export default App;
