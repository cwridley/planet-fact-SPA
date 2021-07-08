import { Component } from "react";
import NavBar from "./Components/NavBar";
import ContentSelection from "./Components/ContentSelection";

class App extends Component {
  state = {
    currentPlanet: "",
    currentContent: "",
  };

  render() {
    return (
      <div className="App">
        <NavBar changePlanet={this.changePlanet} />
        <ContentSelection
          changeContent={this.changeContent}
          currentContent={this.state.currentContent}
          currentPlanet={this.state.currentPlanet}
        />
      </div>
    );
  }

  changePlanet = (e) => {
    const currentPlanet = e.target.closest("li").id;

    this.setState({ currentPlanet, currentContent: "overview" });
  };

  changeContent = (e) => {
    const currentContent = e.target.id;

    this.setState({ currentContent });
  };
}

export default App;
