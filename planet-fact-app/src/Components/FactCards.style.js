import styled from "styled-components";

export const FactCardWrapper = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Antonio:wght@500&family=Spartan:wght@400;700&display=swap");

  --white: #fff;
  --light-gray: hsl(240, 6%, 54%);

  display: grid;
  gap: 0.8rem;
  width: 87%;
  margin: 2rem auto;

  @media screen and (min-width: 768px) {
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    gap: 1.1rem;
    width: 90%;
  }

  @media screen and (min-width: 1024px) {
    gap: 3rem;
    max-width: 1129px;
  }
`;

export const FactCard = styled.section`
  --white: #fff;
  --light-gray: hsl(240, 6%, 54%);

  align-items: center;
  border: 1px solid var(--light-gray);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 2.4rem;
  text-transform: uppercase;

  h3 {
    color: lightgray;
    font-size: 0.8rem;
    letter-spacing: 0.75px;
  }

  p {
    color: #fff;
    font-family: "Antonio";
    font-size: 2rem;
    margin: 1rem 0;
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 1rem 1.5rem;
  }

  p {
    font-size: 2.4rem;
  }

  @media screen and (min-width: 1024px) {
    h3 {
      font-size: 1.1rem;
    }
    p {
      font-size: 4rem;
    }
  }
`;
