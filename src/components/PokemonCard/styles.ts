import styled from "styled-components";

export const Image = styled.img`
  position: relative;
  width: 64px;
  height: 64px;

  transition: transform 0.2s;
`;

export const ColoredLabel = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;

  transform: translate(-50%, -50%) rotate(-5.33deg);
  transform-origin: center bottom;

  transition: all 0.3s;

  width: 600px;
  height: 100px;
`;

export const Container = styled.div`
  position: relative;

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  min-width: 180px;
  padding: 20px 0;
  border-radius: 12px;
  background: var(--white);

  overflow: hidden;
  cursor: pointer;

  *:not(ColoredLabel) {
    z-index: 1;
  }

  &:hover ${Image} {
    transform: scale(1.2);
  }

  &:hover ${ColoredLabel} {
    transform: translate(-50%, -50%) rotate(-10deg);
  }
`;

export const Number = styled.span`
  position: absolute;
  left: 12px;
  top: 8px;

  color: var(--white);

  font: 600 0.875rem "Open Sans";
  font-style: italic;
`;

type ImageProps = {
  backgroundColor: string;
};

export const ImageWrapper = styled.div<ImageProps>`
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 36px;
  border: 4px solid var(--white);

  box-sizing: content-box;

  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(1.01);
    border-radius: 36px;

    background: ${({ backgroundColor }) => backgroundColor};
    /* filter: brightness(2.5); */
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0 12px;
`;

export const Name = styled.span`
  font: 600 1rem "IBM Plex Mono";
  text-transform: uppercase;
  color: var(--text-dark);
`;

export const Type = styled.span``;
