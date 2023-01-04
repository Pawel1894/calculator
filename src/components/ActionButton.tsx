import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  value: string;
}

const Button = styled.button`
  background-color: ${(props) => props.theme.numKeys.background};
  color: ${(props) => props.theme.numKeys.color};
  padding: 0.75rem 1.25rem;
  font-size: 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: none;
  outline: none;
  box-shadow: 0px 3px 0px 0px ${(props) => props.theme.numKeys.shadow};

  &:hover {
    background-color: ${(props) => props.theme.numKeys.hover};
  }

  &:active {
    box-shadow: unset;
    transform: scale(0.95);
  }
`;

export default function ActionButton({ value }: Props): ReactElement {
  return <Button>{value}</Button>;
}
