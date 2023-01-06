import React, { ReactElement } from "react";
import styled from "styled-components";
import { TNumberValues } from "../types";
import { Button } from "./styles/ButtonStyle";

interface Props {
  value: string;
  setOutput: (value: TNumberValues) => void;
}

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.numKeys.background};
  color: ${(props) => props.theme.numKeys.color};
  box-shadow: 0px 3px 0px 0px ${(props) => props.theme.numKeys.shadow};

  &:hover {
    background-color: ${(props) => props.theme.numKeys.hover};
  }
`;

export default function NumberButton({ value, setOutput }: Props): ReactElement {
  function updateValue() {
    setOutput(Number(value));
  }

  return <StyledButton onClick={updateValue}>{value}</StyledButton>;
}
