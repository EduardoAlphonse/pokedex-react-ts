import { InputHTMLAttributes } from "react";
import { FaSearch } from "react-icons/fa";

import { Input, Container, Wrapper } from "./styles";

export const Search = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Container className="responsive-container">
      <Wrapper>
        <Input {...rest} />
        <FaSearch size={19} color={"var(--text-lightest)"} />
      </Wrapper>
    </Container>
  );
};
