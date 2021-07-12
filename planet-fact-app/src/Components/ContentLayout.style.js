import styled from "styled-components";

export const ContentLayout = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-areas: "planet planet" "content buttons";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.64fr 0.36fr;
    column-gap: 60px;
    margin: auto;
    width: 90%;
  }

  @media screen and (min-width: 1024px) {
    grid-template-areas:
      "planet content"
      "planet buttons";
    align-items: center;
    grid-template-columns: 0.6fr 0.4fr;
    column-gap: 110px;
    max-width: 1129px;
  }
`;
