import React, { ReactElement, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import highContrastTheme from "../themes/contrast";
import darkTheme from "../themes/dark";
import lightTheme from "../themes/light";

function getTogglerPosition(name: string) {
  console.log("name", name);
  if (name === "lightTheme") return "calc(50% - 7.5px)";
  if (name === "contrastTheme") return "calc(100% - (15px + 3px))";

  return "3px";
}

type TToggler = {
  name?: string;
};

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 0.75rem;
`;

const Label = styled.span`
  font-size: 0.9rem;
  text-transform: uppercase;
`;

const TogglerWrapper = styled.div`
  display: grid;
  column-gap: 0.25rem;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;

const ThemeNumber = styled.span`
  font-size: 0.8rem;
`;

const Toggler = styled.div<TToggler>`
  position: relative;
  grid-column: 1 / -1;
  border-radius: 100vmax;
  background-color: ${(props) => props.theme.backgrounds.toggle};
  width: 60px;
  height: 23px;
  display: block;
  padding: 0.25rem;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    left: ${(props) => (props.name ? getTogglerPosition(props.name) : "translateX(0)")};
    height: 15px;
    width: 15px;
    background-color: ${(props) => props.theme.toggle};
    border-radius: 100%;
    transition: left 1s, background-color 1s;
  }
`;

export default function ThemeToggler(): ReactElement {
  const { value, setTheme } = useContext(ThemeContext);

  function changeTheme() {
    if (value?.name === "darkTheme") {
      setTheme(lightTheme);
      localStorage.setItem("theme", JSON.stringify(lightTheme));
      return;
    } else if (value?.name === "lightTheme") {
      setTheme(highContrastTheme);
      localStorage.setItem("theme", JSON.stringify(highContrastTheme));
      return;
    } else {
      setTheme(darkTheme);
      localStorage.setItem("theme", JSON.stringify(darkTheme));
      return;
    }
  }

  return (
    <Wrapper>
      <Label>theme</Label>
      <TogglerWrapper>
        <ThemeNumber>1</ThemeNumber>
        <ThemeNumber>2</ThemeNumber>
        <ThemeNumber>3</ThemeNumber>
        <Toggler onClick={changeTheme} name={value?.name}>
          <span></span>
        </Toggler>
      </TogglerWrapper>
    </Wrapper>
  );
}
