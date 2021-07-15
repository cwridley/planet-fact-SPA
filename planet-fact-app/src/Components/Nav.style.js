import styled from "styled-components";

export const NavWrapper = styled.nav`
  @import url("https://fonts.googleapis.com/css2?family=Antonio:wght@500&family=Spartan:wght@400;700&display=swap");

  --light-gray: hsl(240, 6%, 54%);

  border-bottom: 1px solid var(--light-gray);

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const NavButton = styled.button`
  --light-gray: hsl(240, 6%, 54%);

  background: transparent;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  width: 85%;

  h1 {
    font-size: 2.8rem;
    padding: 1.6rem 0;
  }

  @media screen and (min-width: 768px) {
    h1 {
      margin: auto;
      padding: 3.2rem 0 1.6rem 0;
    }

    @media screen and (min-width: 1024px) {
      h1 {
        padding: 0;
        margin: 2.3rem;
      }
    }
  } ;
`;

export const NavOptionWrapper = styled.ul`
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

  background-color: var(--background-blue);
  color: var(--white);
  list-style: none;
  margin: auto;
  max-height: ${(props) => (props.open ? "100%" : "0")};
  overflow: hidden;
  padding: 0;
  text-transform: uppercase;
  transition: all 0.3s ease-out;
  width: 87%;

  li {
    border-bottom: 1px solid var(--light-gray);
    padding: 2rem 0;
  }

  /* a {
    align-items: center;
    background-color: var(--background-blue);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-decoration: none;
    width: 100%;
  } */

  button {
    align-items: center;
    background-color: var(--background-blue);
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-decoration: none;
    width: 100%;
  }

  h2 {
    color: var(--white);
    font-family: "Spartan", sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    line-height: 2.5rem;
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    max-height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-top: none;
    width: 100%;

    li {
      border-bottom: none;
    }

    span {
      display: none;
    }

    h2 {
      font-size: 1.1rem;
      color: var(--light-gray);
    }

    img {
      display: none;
    }
  }
`;

export const NavSpan = styled.span`
  background: var(${(props) => `--${props.color}`});
  border-radius: 50%;
  height: 1.5rem;
  width: 1.5rem;
`;
