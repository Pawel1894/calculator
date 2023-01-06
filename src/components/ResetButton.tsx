import React, { ReactElement } from "react";
import styled from "styled-components";
import { Button } from "./styles/ButtonStyle";

interface Props {
  value: "del" | "reset";
}

const StyledButton = styled(Button)<Props>`
  background-color: ${(props) => props.theme.resetKey.background};
  color: ${(props) => props.theme.resetKey.color};
  box-shadow: 0px 3px 0px 0px ${(props) => props.theme.resetKey.shadow};
  grid-column: ${(props) => (props.value === "reset" ? "1 / 3" : "unset")};

  &:hover {
    background-color: ${(props) => props.theme.resetKey.hover};
  }
`;

export default function ResetButton({ value }: Props): ReactElement {
  return <StyledButton value={value}>{value}</StyledButton>;
}
