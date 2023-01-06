import React, { ReactElement } from "react";
import styled from "styled-components";
import { TAction, TNumberValues, TReset } from "../types";
import ActionButton from "./ActionButton";
import NumberButton from "./NumberButton";
import ResetButton from "./ResetButton";
import ResultButton from "./ResultButton";

type Props = {
  setResult: React.Dispatch<React.SetStateAction<string | null>>;
  setTmpResult: React.Dispatch<React.SetStateAction<string | null>>;
  setLastAction: React.Dispatch<React.SetStateAction<TAction | null>>;
  setIsFinalResult: React.Dispatch<React.SetStateAction<boolean>>;
  tmpResult: string | null;
  result: string | null;
  lastAction: TAction | null;
  isFinalResult: boolean;
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

export default function Keyboard({
  setResult,
  tmpResult,
  setTmpResult,
  result,
  setLastAction,
  lastAction,
  setIsFinalResult,
  isFinalResult,
}: Props): ReactElement {
  function setOutput(value: TNumberValues) {
    if (isFinalResult) resetStates();

    setResult((prev: string | null) => {
      if (!prev) return String(value);

      if (prev && prev.length === 19) return prev;

      return prev + String(value);
    });
  }

  function clearOutput(value: TReset) {
    if (value === "del") resetStates();
    else if (value === "reset") setResult(null);
  }

  function handleDotKey(key: TAction) {
    if (!result?.includes(".")) {
      setTmpResult(result);
      setResult((prev: string | null) => {
        if (!prev) return "0" + key;

        return prev + key;
      });
    }
  }

  function calculateResult() {
    if (tmpResult && lastAction) {
      const action = tmpResult + lastAction + result;
      return eval(action);
    }

    return null;
  }

  function actionHandler(key: TAction) {
    let newResult = result;

    if (key === ".") {
      handleDotKey(key);
      return;
    }

    if (lastAction && lastAction !== ".") {
      newResult = calculateResult();
    }

    if (key === "x") {
      setLastAction("*");
    } else {
      setLastAction(key);
    }

    setTmpResult(newResult ?? "0");
    setResult(null);
  }

  function equalHandler() {
    setIsFinalResult(true);

    if (!lastAction) return;

    if (lastAction) {
      let newResult = calculateResult();
      setResult(newResult);
      setTmpResult(null);
      setLastAction(null);
    }
  }

  function resetStates() {
    setResult(null);
    setTmpResult(null);
    setLastAction(null);
    setIsFinalResult(false);
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
