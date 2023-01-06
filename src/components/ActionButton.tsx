import React, { ReactElement } from "react";
import styled from "styled-components";
import { TAction } from "../types";
import { Button } from "./styles/ButtonStyle";

interface Props {
  value: TAction;
  actionHandler: (key: TAction) => void;
}

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.numKeys.background};
  color: ${(props) => props.theme.numKeys.color};
  box-shadow: 0px 3px 0px 0px ${(props) => props.theme.numKeys.shadow};
  text-transform: lowercase;
  &:hover {
    background-color: ${(props) => props.theme.numKeys.hover};
  }
`;

export default function ActionButton({ value, actionHandler }: Props): ReactElement {
  function onClickHandler() {
    actionHandler(value);
  }
  return <StyledButton onClick={onClickHandler}>{value}</StyledButton>;
}
