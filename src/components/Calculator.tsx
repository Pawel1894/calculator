import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import { TAction } from "../types";
import Keyboard from "./Keyboard";
import Output from "./Output";

export default function Calculator(): ReactElement {
  const [result, setResult] = useState<string | null>(null);
  const [tmpResult, setTmpResult] = useState<string | null>(null);
  const [lastAction, setLastAction] = useState<TAction | null>(null);
  const [isFinalResult, setIsFinalResult] = useState(false);
  return (
    <>
      <Output result={result} />
      <Keyboard
        lastAction={lastAction}
        setLastAction={setLastAction}
        result={result}
        setResult={setResult}
        tmpResult={tmpResult}
        setTmpResult={setTmpResult}
        setIsFinalResult={setIsFinalResult}
        isFinalResult={isFinalResult}
      />
    </>
  );
}
