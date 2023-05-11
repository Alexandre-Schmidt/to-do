import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  padding-top: -10px;
  margin-top: -1rem;

  input {
    width: 100%;
    height: 54px;
    background: ${(props) => props.theme["gray-500"]};
    border: 1px solid ${(props) => props.theme["gray-700"]};
    color: ${(props) => props.theme["gray-100"]};
    border-radius: 8px;
    border: 0;
    padding: 1rem;
  }
  button {
    display: flex;
    align-items: center;
    padding: 1em;
    gap: 0.25em;
    border: none;
    border-radius: 8px;
    background: ${(props) => props.theme["blue-500"]};
    color: ${(props) => props.theme["gray-100"]};
  }
  svg {
    margin-bottom: -2px;
  }
`;
