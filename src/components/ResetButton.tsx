import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  value: "del" | "reset";
}

const Button = styled.button<Props>`
  background-color: ${(props) => props.theme.resetKey.background};
  color: ${(props) => props.theme.resetKey.color};
  padding: 0.75rem 1.25rem;
  font-size: 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: none;
  outline: none;
  text-transform: uppercase;
  box-shadow: 0px 3px 0px 0px ${(props) => props.theme.resetKey.shadow};
  grid-column: ${(props) => (props.value === "reset" ? "1 / 3" : "unset")};

  &:hover {
    background-color: ${(props) => props.theme.resetKey.hover};
  }

  &:active {
    box-shadow: unset;
    transform: scale(0.95);
  }
`;

export default function ResetButton({ value }: Props): ReactElement {
  return <Button value={value}>{value}</Button>;
}
