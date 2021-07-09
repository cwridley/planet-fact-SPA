import { Component } from "react";
import { PlanetWrapper } from "./Planet.style";
import { PlanetImage } from "./Planet.style";

export default class Planet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PlanetWrapper>
        <PlanetImage src={this.props.image}></PlanetImage>
      </PlanetWrapper>
    );
  }
}
