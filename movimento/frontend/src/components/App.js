import React, { Component } from "react";

class App extends Component {
  state = {
    name: "Vince",
  };
  nameChangedHandler = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };

  render() {
    console.log("HELLO WORLD");
    return (
      <div className="App">
        <h1>Testing React Code!</h1>
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
