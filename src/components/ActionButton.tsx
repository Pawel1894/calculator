import React, { ReactElement } from "react";
import styled from "styled-components";
import { Button } from "./styles/ButtonStyle";

interface Props {
  value: string;
}

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.numKeys.background};
  color: ${(props) => props.theme.numKeys.color};
  box-shadow: 0px 3px 0px 0px ${(props) => props.theme.numKeys.shadow};

  &:hover {
    background-color: ${(props) => props.theme.numKeys.hover};
  }
`;

export default function ActionButton({ value }: Props): ReactElement {
  return <StyledButton>{value}</StyledButton>;
}
