import React, { ReactElement } from "react";
import styled from "styled-components";
import { Button } from "./styles/ButtonStyle";

interface Props {
  value: "del" | "reset";
  clearOutput: (value: "del" | "reset") => void;
}

type StyleProps = {
  value: "del" | "reset";
};

const StyledButton = styled(Button)<StyleProps>`
  @media (max-width: 32rem) {
    font-size: 1.1rem;
  }
  background-color: ${(props) => props.theme.resetKey.background};
  color: ${(props) => props.theme.resetKey.color};
  box-shadow: 0px 3px 0px 0px ${(props) => props.theme.resetKey.shadow};
  grid-column: ${(props) => (props.value === "reset" ? "1 / 3" : "unset")};

  &:hover {
    background-color: ${(props) => props.theme.resetKey.hover};
  }
`;

export default function ResetButton({ value, clearOutput }: Props): ReactElement {
  function onClickHandler() {
    clearOutput(value);
  }

  return (
    <StyledButton onClick={onClickHandler} value={value}>
      {value}
    </StyledButton>
  );
}
