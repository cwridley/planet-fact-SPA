import styled from "styled-components";

export const ContentSelectionWrapper = styled.ul`
  @import url("https://fonts.googleapis.com/css2?family=Antonio:wght@500&family=Spartan:wght@400;700&display=swap");

  --white: #fff;
  --light-gray: hsl(240, 6%, 54%);
  --background-blue: hsl(240, 67%, 8%);
  --button-hover-blue: hsl(240, 17%, 26%);
  --light: hsl(240, 6%, 54%);
  --mercury: hsl(194, 48%, 49%);
  --venus: hsl(33, 82%, 61%);
  --earth: hsl(263, 67%, 51%);
  --mars: hsl(2, 68%, 53%);
  --jupiter: hsl(10, 63%, 51%);
  --saturn: hsl(17, 73%, 46%);
  --uranus: hsl(240, 17%, 26%);
  --neptune: hsl(169, 73%, 44%);

  flex-direction: row;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid var(--light-gray);

  @media screen and (min-width: 768px) {
    flex-direction: column;
    border: none;
    gap: 1.6rem;
  }
`;

export const ListWrapper = styled.li`
  /* --white: #fff;
  --light-gray: hsl(240, 6%, 54%);
  --background-blue: hsl(240, 67%, 8%);
  --button-hover-blue: hsl(240, 17%, 26%);
  --light: hsl(240, 6%, 54%);
  --mercury: hsl(194, 48%, 49%);
  --venus: hsl(33, 82%, 61%);
  --earth: hsl(263, 67%, 51%);
  --mars: hsl(2, 68%, 53%);
  --jupiter: hsl(10, 63%, 51%);
  --saturn: hsl(17, 73%, 46%);
  --uranus: hsl(240, 17%, 26%);
  --neptune: hsl(169, 73%, 44%); */

  border-bottom: 4px solid
    ${(props) =>
      props.currentContent ? `var(--${props.currentPlanet})` : "transparent"};
  list-style: none;

  @media screen and (min-width: 768px) {
    border: 1px solid var(--light-gray);
    background: ${(props) =>
      props.currentContent ? `var(--${props.currentPlanet})` : "transparent"};
  }

  @media screen and (min-width: 1024px) {
    &:hover,
    &:focus,
    &:focus-within {
      background: ${(props) =>
        !props.currentContent ? `var(--light-gray)` : ""};
    }
  }
`;

export const ContentButton = styled.button`
  --light-gray: hsl(240, 6%, 54%);

  color: ${(props) => (props.currentContent ? `#fff` : "var(--light-gray)")};
  background-color: transparent;
  border: none;
  font-family: "Spartan", sans-serif;
  font-size: 1.1rem;
  letter-spacing: 1.25px;
  font-weight: 700;
  padding: 2rem 0 1.6rem 0;
  min-width: 8rem;
  cursor: pointer;
  letter-spacing: 1.5px;

  span {
    display: none;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    text-align: left;
    color: #fff;

    span {
      display: inline-block;
      padding: 0 2rem;
    }
  }
`;
