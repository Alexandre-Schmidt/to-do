import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: -2rem;

  input {
    width: 100%;
    height: 100%;
    padding: 1rem;
    color: ${(props) => props.theme["gray-100"]};
    background: ${(props) => props.theme["gray-500"]};
    border: 1px solid ${(props) => props.theme["gray-700"]};
    border-radius: 8px;
    &:focus-visible {
      border: 1px solid $purple;
      outline: none;
    }
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
    transition: background-color 0.15s;

    &:focus-visible,
    &:hover {
      background-color: ${(props) => props.theme["blue-300"]};
    }
    svg {
      margin-but: -2rem;
    }
  }
`;
