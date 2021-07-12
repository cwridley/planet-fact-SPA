import styled from "styled-components";

export const ContentWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Antonio:wght@400&family=Spartan:wght@400;700&display=swap");

  --white: #fff;
  --light-gray: hsl(240, 6%, 54%);

  color: var(--white);
  text-align: center;
  width: 87%;
  margin: auto;
  grid-area: content;

  h2 {
    font-size: 4rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 2.2rem;
    margin: 1.6rem 0;
  }

  span {
    display: inline-block;
    color: var(--light-gray);
    margin: 2rem 0;
  }

  a {
    color: var(--light-gray);
  }

  @media screen and (min-width: 768px) {
    text-align: left;
    margin: 0;
    width: 100%;
    font-size: 1.1rem;

    p {
      font-size: 1rem;
    }

    h2 {
      font-size: 4.8rem;
    }
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.5rem;
    align-self: end;

    h2 {
      font-size: 8rem;
    }

    p {
      font-size: 1.5rem;
      letter-spacing: 0.5px;
      line-height: 3rem;
    }
  }
`;
