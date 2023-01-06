import React, { ReactElement } from "react";
import styled from "styled-components";

type Props = {
  result: string | null;
};

const Wrapper = styled.div`
  padding-block: 1rem;
  padding-top: 1.5rem;
  text-align: right;
  background-color: ${(props) => props.theme.backgrounds.screen};
  border-radius: 0.5rem;
  overflow-x: auto;
  scrollbar-color: ${(props) => props.theme.toggle} ${(props) => props.theme.backgrounds.screen};
  scrollbar-width: thin;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px ${(props) => props.theme.backgrounds.screen};
    background-color: ${(props) => props.theme.backgrounds.screen};
  }

  &::-webkit-scrollbar {
    height: 6px;
    background-color: ${(props) => props.theme.toggle};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.toggle};
  }
`;

const Result = styled.span`
  font-size: 2.4rem;
  margin-inline: 1rem;
  line-height: 1;
`;

export default function Output({ result }: Props): ReactElement {
  return (
    <Wrapper>
      <Result>{result ?? "0"}</Result>
    </Wrapper>
  );
}
