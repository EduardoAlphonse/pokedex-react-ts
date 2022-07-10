import {
  Container,
  ColoredLabel,
  Number,
  ImageWrapper,
  Image,
  Info,
  Name,
  Type,
} from "./styles";

type PokemonCardProps = {
  id: number;
  name: string;
  image: string;
};

export const PokemonCard = ({ id, image, name }: PokemonCardProps) => {
  return (
    <Container>
      <ColoredLabel style={{ background: "var(--text-dark)" }} />
      <Number>#{id}</Number>
      <ImageWrapper backgroundColor={"var(--text-lightest)"}>
        <Image src={image} alt="name" />
      </ImageWrapper>
      <Info>
        <Name>{name}</Name>
        <Type>🔥</Type>
      </Info>
    </Container>
  );
};
