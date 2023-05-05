import styled from "styled-components";

export const HomeContainer = styled.div``;

export const HomeContent = styled.div`
  width: 736px;
  height: calc(100vh - 12.5rem);
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FormAddTask = styled.form`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  input {
    width: 100%;
    height: 54px;
    background: ${(props) => props.theme["gray-500"]};
    border: 1px solid ${(props) => props.theme["gray-700"]};
    border-radius: 8px;
  }
  button {
    width: 90px;
    height: 52px;
    background: ${(props) => props.theme["blue-500"]};
    border-radius: 8px;
    color: ${(props) => props.theme["gray-100"]};
  }
`;
//
