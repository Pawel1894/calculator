import React, { ReactElement, useState } from "react";
import { TAction } from "../types";
import Keyboard from "./Keyboard";
import Output from "./Output";

export default function Calculator(): ReactElement {
  const [result, setResult] = useState<string>("0");
  const [lastAction, setLastAction] = useState<TAction | null>(null);
  return (
    <>
      <Output result={result} />
      <Keyboard lastAction={lastAction} setLastAction={setLastAction} result={result} setResult={setResult} />
    </>
  );
}
