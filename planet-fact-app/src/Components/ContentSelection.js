import { Component } from "react";
import {
  ContentButton,
  ContentSelectionWrapper,
  ListWrapper,
} from "./ContentSelection.style";

export default class ContentSelection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ContentSelectionWrapper>
        {["overview", "structure", "surface"].map((el, index) => (
          <ListWrapper
            key={el}
            currentContent={this.isactive(el)}
            currentPlanet={this.props.currentPlanet}
          >
            <ContentButton
              id={el}
              onClick={this.props.changeContent}
              currentContent={this.isactive(el)}
            >
              <span>{"0" + `${index + 1}`}</span>
              {el.toUpperCase()}
            </ContentButton>
          </ListWrapper>
        ))}
      </ContentSelectionWrapper>
    );
  }

  isactive = (content) => {
    const active = this.props.currentContent === content ? true : false;
    return active;
  };
}
