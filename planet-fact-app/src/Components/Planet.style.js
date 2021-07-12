import styled, { keyframes } from "styled-components";

export const PlanetWrapper = styled.div`
  /* display: flex;
  flex-direction: row; */
  grid-area: planet;
  height: 304px;
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    height: 460px;
  }

  @media screen and (min-width: 1024px) {
    height: 754px;
  }
`;

export const PlanetImage = styled.img`
  position: absolute;
  transform: scale(0.384) translate(-50%, -50%);
  transform-origin: 0 0;
  left: 50%;
  top: 50%;

  @media screen and (min-width: 768px) {
    position: absolute;
    transform: scale(0.633) translate(-50%, -50%);
    transform-origin: 0 0;
    left: 50%;
    top: 50%;
  }

  @media screen and (min-width: 1024px) {
    position: absolute;
    transform: scale(1) translate(-50%, -50%);
    transform-origin: 0 0;
    left: 50%;
    top: 50%;
  }
`;

export const GeologyImage = styled.img`
  display: ${(props) => (props.geologyActive ? `inline-block` : "none")};
  height: 33%;
  left: 50%;
  position: absolute;
  top: 78%;
  transform: translate(-50%, -50%);
`;
