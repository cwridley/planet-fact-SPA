import { Component } from "react";
import NavBar from "./Components/NavBar";
import ContentSelection from "./Components/ContentSelection";
import Content from "./Components/Content";
import Planet from "./Components/Planet";

const planetData = require("./data.json");

class App extends Component {
  state = {
    currentPlanetData: "",
    currentPlanet: "",
    currentContent: "",
    currentContentText: "",
    currentContentLink: "",
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
        <Planet image={this.state.currentContentImage} />
        <Content
          currentPlanet={this.state.currentPlanet}
          currentContentText={this.state.currentContentText}
          currentContentLink={this.state.currentContentLink}
        />
      </div>
    );
  }

  changePlanet = (e) => {
    const currentPlanet = e.target.closest("li").id;

    const currentPlanetData = planetData.find(
      (obj) =>
        obj.name === currentPlanet[0].toUpperCase() + currentPlanet.slice(1)
    );

    const currentContentImage = currentPlanetData.images.planet;
    const currentContentLink = currentPlanetData.overview.source;
    const currentContentText = currentPlanetData.overview.content;

    this.setState({
      currentPlanet,
      currentPlanetData,
      currentContentImage,
      currentContent: "overview",
      currentContentText,
      currentContentLink,
    });
  };

  changeContent = (e) => {
    const currentContent = e.target.id;

    const currentPlanetData = this.state.currentPlanetData;
    let currentContentImage = "";
    let currentContentText = "";
    let currentContentLink = "";

    switch (currentContent) {
      case "overview":
        currentContentImage = currentPlanetData.images.planet;
        currentContentText = currentPlanetData.overview.content;
        currentContentLink = currentPlanetData.overview.source;
        break;

      case "structure":
        currentContentImage = currentPlanetData.images.internal;
        currentContentText = currentPlanetData.structure.content;
        currentContentLink = currentPlanetData.structure.source;
        break;

      case "surface":
        currentContentImage = currentPlanetData.images.geology;
        currentContentText = currentPlanetData.geology.content;
        currentContentLink = currentPlanetData.geology.source;
    }

    this.setState({
      currentContent,
      currentContentImage,
      currentContentText,
      currentContentLink,
    });
  };
}

export default App;
