import styled from "styled-components";

export const PokemonList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.75rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  overflow-y: scroll;

  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 880px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
