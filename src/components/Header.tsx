import React, { ReactElement } from "react";
import styled from "styled-components";
import ThemeToggler from "./ThemeToggler";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  line-height: 1;
`;

export default function Header(): ReactElement {
  return (
    <Container>
      <Title>calc</Title>
      <ThemeToggler />
    </Container>
  );
}
