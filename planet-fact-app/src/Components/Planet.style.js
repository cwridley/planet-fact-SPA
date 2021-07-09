import styled from "styled-components";

export const PlanetWrapper = styled.div`
  min-height: 30rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const PlanetImage = styled.img`
  transform: scale(0.384);

  @media screen and (min-width: 768px) {
    transform: scale(0.633);
  }

  @media screen and (min-width: 1024px) {
    transform: scale(1);
  }
`;
