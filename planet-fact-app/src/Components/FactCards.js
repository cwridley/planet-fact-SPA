import { Component } from "react";
import { FactCardWrapper, FactCard } from "./FactCards.style";

export default class FactCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { rotation, revolution, radius, temperature } = this.props.planetData;

    return (
      <FactCardWrapper>
        <FactCard>
          <h3>rotation time</h3>
          <p>{rotation}</p>
        </FactCard>
        <FactCard>
          <h3>revolution time</h3>
          <p>{revolution}</p>
        </FactCard>
        <FactCard>
          <h3>radius</h3>
          <p>{radius}</p>
        </FactCard>
        <FactCard>
          <h3>average temp.</h3>
          <p>{temperature}</p>
        </FactCard>
      </FactCardWrapper>
    );
  }
}
