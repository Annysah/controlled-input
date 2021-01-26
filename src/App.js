import React from "react";
import "./styles.css";

class App extends React.Component {
  state = {
    userInput: ""
  };

  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({ userInput: e.target.value });
  };

  render() {
    const { userInput } = this.state;
    return (
      <div>
        <h2>Controlled User Input: {userInput}</h2>
        <form>
          <input type="text" value={userInput} onChange={this.handleInput} />
        </form>
      </div>
    );
  }
}

export default App;
