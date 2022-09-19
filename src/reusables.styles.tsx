import styled from "styled-components/macro";

export const colors = {
  pink: "255, 0, 214",
  blue: "0, 102, 255",
  grey: "102, 102, 102",
};

export const PaddedButton = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  border-radius: 0.75rem;
  background-color: ${({ color }) => `rgb(${color}, 0.36)`};
  color: ${({ color }) => `rgb(${color})`};
  text-align: center;
  font-weight: bold;
  width: fit-content;
  padding: 0.75rem;
  font-family: "Jetbrains Mono";
  font-size: 14px;
  cursor: pointer;
  user-select: none;

  :hover {
    border: 2px solid ${({ color }) => `rgb(${color})`};
    margin: -2px;
  }
`;

export const Text = styled.div<{
  color: string;
  size: number;
  weight: number;
  width?: string;
}>`
  color: ${({ color }) => `rgb(${color})`};
  text-align: center;
  font-weight: ${({ weight }) => `${weight}`};
  width: ${({ width }) => (width ? width : "max-content")};
  font-family: "Inter";
  font-size: ${({ size }) => `${size}px`};
`;

export const Flex = styled.div<{
  dir?: string;
  gap?: number;
  justify?: string;
  align?: string;
  margin?: string;
  width?: string;
}>`
  display: flex;
  flex-direction: ${({ dir }) => `${dir}`};
  gap: ${({ gap }) => `${gap}rem`};
  justify-content: ${({ justify }) => `${justify}`};
  align-items: ${({ align }) => `${align}`};
  width: ${({ width }) => `${width}`};
  margin: ${({ margin }) => `${margin}`};
`;
