import styled from "styled-components";

export const ContentWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Antonio:wght@500&family=Spartan:wght@400;700&display=swap");

  --white: #fff;
  --light-gray: hsl(240, 6%, 54%);

  color: var(--white);
  text-align: center;

  p {
    font-size: 1.1rem;
    line-height: 2.2rem;
    letter-spacing: 1px;
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

    h2 {
      font-size: 4.8rem;
    }
  }

  @media screen and (min-width: 1024px) {
    h2 {
      font-size: 8rem;
    }

    p {
      font-size: 1.4rem;
    }

    a {
      font-size: 1.4rem;
    }
  }
`;
