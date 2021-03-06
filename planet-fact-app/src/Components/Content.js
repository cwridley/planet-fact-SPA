import { Component } from "react";
import { ContentWrapper } from "./Content.style";

export default class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ContentWrapper>
        <h2>
          {this.props.currentPlanet
            ? this.props.currentPlanet[0].toUpperCase() +
              this.props.currentPlanet.slice(1)
            : null}
        </h2>
        <p>{this.props.currentContentText}</p>
        <span>
          Source:{" "}
          <a href={this.props.currentContentLink}>
            Wikipedia <img src="./icon-source.svg" alt=""></img>
          </a>
        </span>
      </ContentWrapper>
    );
  }
}
