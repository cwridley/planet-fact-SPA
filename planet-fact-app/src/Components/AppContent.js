import { Component } from "react";
import { ContentLayout } from "./ContentLayout.style";
import ContentSelection from "./ContentSelection";
import Content from "./Content";
import Planet from "./Planet";
import FactCards from "./FactCards";

export default class AppConetent extends Component {
  constructor(props) {
    super(props);
  }

  state = { apiInfo: "default" };

  // When componenet initially mounts, make get request to the planets server
  componentWillMount() {
    fetch(`http://localhost:9000/api/planets/${this.props.match.params.id}`, {
      method: "GET",
      credentials: "include",
    })
      .then(function (response) {
        return response.json();
      })
      .then((response) => {
        this.setState({ apiInfo: response }, () => this.planetChange());
      });
  }

  // After componenet has already mounted, make call when state changes
  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state) {
      fetch(`http://localhost:9000/api/planets/${this.props.match.params.id}`, {
        method: "GET",
        credentials: "include",
      })
        .then(function (response) {
          return response.json();
        })
        .then((response) => {
          this.setState({ apiInfo: response }, () => this.planetChange());
        });
    }
  }

  render() {
    return (
      <div>
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
        <FactCards planetData={this.state.apiInfo} />
      </div>
    );
  }

  // change planet and set state to 'overview' content
  planetChange = (e) => {
    const apiInfo = this.state.apiInfo;
    const currentPlanet = apiInfo.name;
    const currentContentImage = apiInfo.images.planet;
    const currentContentLink = apiInfo.overview.source;
    const currentContentText = apiInfo.overview.content;
    const geologyImage = apiInfo.images.geology;
    const geologyActive = false;

    this.setState({
      currentPlanet,
      currentContentLink,
      currentContentText,
      currentContentImage,
      geologyActive,
      geologyImage,
      currentConten: "overview",
    });
  };

  // change content and update state to match selection of 'overview', 'structure' or 'surface'
  changeContent = (e) => {
    const currentContent = e.target.id;
    const currentPlanetData = this.state.apiInfo;

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
