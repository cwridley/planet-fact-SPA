import { Component } from "react";
import { PlanetWrapper } from "./Planet.style";
import { PlanetImage, GeologyImage } from "./Planet.style";

export default class Planet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PlanetWrapper image={this.props.image}>
        <PlanetImage src={this.props.image}></PlanetImage>
        <GeologyImage
          src={this.props.geologyImage}
          geologyActive={this.props.geologyActive}
        ></GeologyImage>
      </PlanetWrapper>
    );
  }
}
