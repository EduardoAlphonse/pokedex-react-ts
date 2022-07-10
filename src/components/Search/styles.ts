import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: 400px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;

  ${Wrapper} {
    position: relative;

    svg {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 6px 43px;
  border-radius: 40px;

  background: var(--white);
  font-size: 1rem;
  color: var(--text);
  text-align: center;

  border: none;

  &::placeholder {
    color: var(--text-lightest);
  }
`;
