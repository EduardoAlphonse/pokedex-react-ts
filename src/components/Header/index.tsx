import styled from "styled-components";

import pokeball from "../../assets/pokeball.png";

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  padding-top: 2rem;
  padding-bottom: 1rem;

  img {
    width: 36px;
    height: 36px;
  }
`;

const Title = styled.h1`
  font: 600 2rem "IBM Plex Mono";
  color: var(--text-dark);
  text-transform: uppercase;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Header = () => {
  return (
    <Wrapper className="responsive-container">
      <Title>Pokedex React</Title>
      <img src={pokeball} alt="Pokeball" />
    </Wrapper>
  );
};
