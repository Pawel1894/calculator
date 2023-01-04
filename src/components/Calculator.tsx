import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import Keyboard from "./Keyboard";
import Output from "./Output";

export default function Calculator(): ReactElement {
  const [result, setResult] = useState<number>(0);
  return (
    <>
      <Output result={result} />
      <Keyboard setResult={setResult} />
    </>
  );
}
