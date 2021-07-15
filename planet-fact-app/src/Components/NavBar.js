import {
  NavWrapper,
  NavButton,
  TitleWrapper,
  NavOptionWrapper,
  NavSpan,
} from "./Nav.style";
import { Component } from "react";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    planets: [
      "mercury",
      "venus",
      "mars",
      "earth",
      "jupiter",
      "saturn",
      "uranus",
      "neptune",
    ],
    navOpen: false,
  };

  navToggle() {
    this.setState(
      this.state.navOpen === true ? { navOpen: false } : { navOpen: true }
    );
  }

  render() {
    return (
      <NavWrapper>
        <TitleWrapper>
          <h1>THE PLANETS</h1>
          <NavButton onClick={(e) => this.navToggle()}>
            <img src="./icon-hamburger.svg" alt="nav bar dropdown"></img>
          </NavButton>
        </TitleWrapper>
        <NavOptionWrapper open={this.state.navOpen}>
          {this.state.planets.map((el) => (
            <li key={el} id={el} onClick={this.props.changePlanet}>
              <button>
                <NavSpan color={el}></NavSpan>
                <h2>{el}</h2>
                <img src="./icon-chevron.svg" alt=""></img>
              </button>
            </li>
          ))}
        </NavOptionWrapper>
      </NavWrapper>
    );
  }
}
