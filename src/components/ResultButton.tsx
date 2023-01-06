import React, { ReactElement } from "react";
import styled from "styled-components";
import { Button } from "./styles/ButtonStyle";

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.resultKey.background};
  color: ${(props) => props.theme.resultKey.color};
  cursor: pointer;
  box-shadow: 0px 3px 0px 0px ${(props) => props.theme.resultKey.shadow};
  grid-column: 3 / -1;

  &:hover {
    background-color: ${(props) => props.theme.resultKey.hover};
  }
`;
export default function ResultButton(): ReactElement {
  return <StyledButton>=</StyledButton>;
}
