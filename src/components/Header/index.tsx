import styled from "styled-components";

import pokeball from "../../assets/pokeball.png";

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  padding: 2rem 0 1rem;

  img {
    width: 36px;
    height: 36px;
  }
`;

const Title = styled.h1`
  font: 600 2rem "IBM Plex Mono";
  color: var(--text-dark);
  text-transform: uppercase;
`;

export const Header = () => {
  return (
    <Wrapper>
      <Title>Pokedex React</Title>
      <img src={pokeball} alt="Pokeball" />
    </Wrapper>
  );
};
