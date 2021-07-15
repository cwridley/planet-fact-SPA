import { Component } from "react";
import NavBar from "./Components/NavBar";
import ContentSelection from "./Components/ContentSelection";
import Content from "./Components/Content";
import Planet from "./Components/Planet";
import FactCards from "./Components/FactCards";
import { ContentLayout } from "./Components/ContentLayout.style";

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
        <ContentLayout>
          <ContentSelection
            changeContent={this.changeContent}
            currentContent={this.state.currentContent}
            currentPlanet={this.state.currentPlanet}
          />
          <Planet
            image={this.state.currentContentImage}
            geologyImage={this.state.geologyImage}
            geologyActive={this.state.geologyActive}
          />
          <Content
            currentPlanet={this.state.currentPlanet}
            currentContentText={this.state.currentContentText}
            currentContentLink={this.state.currentContentLink}
          />
        </ContentLayout>
        <FactCards planetData={this.state.currentPlanetData} />
      </div>
    );
  }

  /* 
    change planets
      set state to 'overview'
  */
  changePlanet = (e) => {
    const currentPlanet = e.target.closest("li").id;

    const currentPlanetData = planetData.find(
      (obj) =>
        obj.name === currentPlanet[0].toUpperCase() + currentPlanet.slice(1)
    );

    const currentContentImage = currentPlanetData.images.planet;
    const currentContentLink = currentPlanetData.overview.source;
    const currentContentText = currentPlanetData.overview.content;
    const geologyImage = currentPlanetData.images.geology;
    const geologyActive = false;

    this.setState({
      currentPlanet,
      currentPlanetData,
      currentContentImage,
      geologyImage,
      geologyActive,
      currentContent: "overview",
      currentContentText,
      currentContentLink,
    });
  };

  /* 
    change state for current planet
      image, content picker, content description, link and fact-cards
  */
  changeContent = (e) => {
    const currentContent = e.target.id;

    const currentPlanetData = this.state.currentPlanetData;
    let currentContentImage = "";
    let currentContentText = "";
    let currentContentLink = "";
    let geologyActive = false;

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
        currentContentImage = currentPlanetData.images.planet;
        currentContentText = currentPlanetData.geology.content;
        currentContentLink = currentPlanetData.geology.source;
        geologyActive = true;
    }

    this.setState({
      currentContent,
      currentContentImage,
      currentContentText,
      currentContentLink,
      geologyActive,
    });
  };
}

export default App;
