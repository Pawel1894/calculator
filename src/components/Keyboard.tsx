import React, { ReactElement } from "react";
import styled from "styled-components";
import ActionButton from "./ActionButton";
import NumberButton from "./NumberButton";
import ResetButton from "./ResetButton";
import ResultButton from "./ResultButton";

type Props = {
  setResult: (state: number) => void;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 63px);
  background-color: ${(props) => props.theme.backgrounds.toggle};
  padding: 1rem;
  border-radius: 0.5rem;
  gap: 1rem;
`;

export default function Keyboard({ setResult }: Props): ReactElement {
  return (
    <Wrapper>
      <NumberButton value="7" />
      <NumberButton value="8" />
      <NumberButton value="9" />
      <ResetButton value="del" />
      <NumberButton value="4" />
      <NumberButton value="5" />
      <NumberButton value="6" />
      <ActionButton value="+" />
      <NumberButton value="1" />
      <NumberButton value="2" />
      <NumberButton value="3" />
      <ActionButton value="-" />
      <ActionButton value="." />
      <NumberButton value="0" />
      <ActionButton value="/" />
      <ActionButton value="x" />
      <ResetButton value="reset" />
      <ResultButton />
    </Wrapper>
  );
}
