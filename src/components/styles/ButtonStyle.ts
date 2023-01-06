import styled from "styled-components";

export const Button = styled.button`
  padding: 0.75rem 1.25rem;
  font-size: 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: none;
  outline: none;
  text-transform: uppercase;

  &:active {
    box-shadow: unset;
    transform: scale(0.95);
  }
`;
