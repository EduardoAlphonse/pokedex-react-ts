// import { useEffect } from "react";
// import { getPokemonColorById } from "../../services/api";

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
  // let labelColor = "";

  // useEffect(() => {
  //   (async () => {
  //     labelColor = await getPokemonColorById(id);
  //   })();
  // });

  return (
    <Container>
      <ColoredLabel style={{ background: "var(--text-dark)" }} />
      <Number>#{id}</Number>
      <ImageWrapper backgroundColor={"var(--text-lightest)"}>
        <Image src={image} alt="name" />
      </ImageWrapper>
      <Info>
        <Name style={{ display: "block", width: "100%", textAlign: "center" }}>
          {name}
        </Name>
        {/* <Type>🔥</Type> */}
      </Info>
    </Container>
  );
};
