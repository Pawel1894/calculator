import React, { ReactElement } from "react";
import styled from "styled-components";
import { TAction, TNumberValues, TReset } from "../types";
import ActionButton from "./ActionButton";
import NumberButton from "./NumberButton";
import ResetButton from "./ResetButton";
import ResultButton from "./ResultButton";

type Props = {
  setResult: React.Dispatch<React.SetStateAction<string>>;
  setLastAction: React.Dispatch<React.SetStateAction<TAction | null>>;
  result: string | null;
  lastAction: TAction | null;
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

export default function Keyboard({ setResult, result, setLastAction, lastAction }: Props): ReactElement {
  function setOutput(value: TNumberValues | TAction) {
    setResult((prev: string | null) => {
      if (!prev || (prev === "0" && value !== ".")) return String(value);

      return prev + String(value);
    });
  }

  function removeLastChar() {
    if (result)
      setResult((prevState) => {
        const newVal = String(prevState).slice(0, -1);
        if (newVal) return newVal;

        return "0";
      });
  }

  function clearOutput(value: TReset) {
    if (value === "del") {
      removeLastChar();
    } else if (value === "reset") resetStates();
  }

  function handleDotKey() {
    const newResult = result?.split(/[+\-*\/]/);

    if (newResult && newResult[newResult.length - 1].includes(".")) {
      return false;
    }
    return true;
  }

  function calculateResult() {
    if (result) return String(eval(result));
    else return "0";
  }

  function checkIfLastIsSpecialChar() {
    const char = result?.charAt(result.length - 1);

    if (Number(char) === Number(char)) return true;

    return false;
  }

  function actionHandler(key: TAction) {
    let newKey = key;

    if (!result || !checkIfLastIsSpecialChar()) return;

    if (key === ".") {
      if (handleDotKey()) setOutput(newKey);
    } else {
      if (key === "x") newKey = "*";

      setOutput(newKey);
    }
  }

  function equalHandler() {
    if (lastAction) return;

    const newResult = calculateResult();
    setResult(newResult);
  }

  function resetStates() {
    setResult("0");
    setLastAction(null);
  }

  return (
    <Wrapper>
      <NumberButton setOutput={setOutput} value="7" />
      <NumberButton setOutput={setOutput} value="8" />
      <NumberButton setOutput={setOutput} value="9" />
      <ResetButton clearOutput={clearOutput} value="del" />
      <NumberButton setOutput={setOutput} value="4" />
      <NumberButton setOutput={setOutput} value="5" />
      <NumberButton setOutput={setOutput} value="6" />
      <ActionButton actionHandler={actionHandler} value="+" />
      <NumberButton setOutput={setOutput} value="1" />
      <NumberButton setOutput={setOutput} value="2" />
      <NumberButton setOutput={setOutput} value="3" />
      <ActionButton actionHandler={actionHandler} value="-" />
      <ActionButton actionHandler={actionHandler} value="." />
      <NumberButton setOutput={setOutput} value="0" />
      <ActionButton actionHandler={actionHandler} value="/" />
      <ActionButton actionHandler={actionHandler} value="x" />
      <ResetButton clearOutput={clearOutput} value="reset" />
      <ResultButton equalHandler={equalHandler} />
    </Wrapper>
  );
}
