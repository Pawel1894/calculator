import React, { ReactElement } from "react";
import styled from "styled-components";

type Props = {
  result: number;
};

const Wrapper = styled.div`
  padding: 1rem;
  text-align: right;
  background-color: ${(props) => props.theme.backgrounds.screen};
  border-radius: 0.5rem;
`;

const Result = styled.span`
  font-size: 2.7rem;
  line-height: 1;
`;

export default function Output({ result }: Props): ReactElement {
  return (
    <Wrapper>
      <Result>{result}</Result>
    </Wrapper>
  );
}
