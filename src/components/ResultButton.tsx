import React, { ReactElement } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.theme.resultKey.background};
  color: ${(props) => props.theme.resultKey.color};
  padding: 0.5rem 1.25rem;
  font-size: 2rem;
  padding-top: 0.75rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: none;
  outline: none;
  text-transform: uppercase;
  box-shadow: 0px 3px 0px 0px ${(props) => props.theme.resultKey.shadow};
  grid-column: 3 / -1;

  &:hover {
    background-color: ${(props) => props.theme.resultKey.hover};
  }

  &:active {
    box-shadow: unset;
    transform: scale(0.95);
  }
`;
export default function ResultButton(): ReactElement {
  return <Button>=</Button>;
}
