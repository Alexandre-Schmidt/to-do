import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 4rem;
  line-height: 17px;
`;

export const TasksInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme["blue-300"]};

  p:last-child {
    color: ${(props) => props.theme["purple-300"]};
  }

  span {
    background: ${(props) => props.theme["gray-400"]};
    color: ${(props) => props.theme["gray-200"]};
    padding: 2px 8px;
    border-radius: 999px;
    margin-left: 0.5rem;
  }
`;

export const Task = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: start;

  background: ${(props) => props.theme["gray-500"]};
  color: ${(props) => props.theme["gray-200"]};

  border: 1px solid ${(props) => props.theme["gray-400"]};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  padding: 0.75rem;
  gap: 1rem;
  margin-bottom: 0.825rem;

  input {
    flex: 0;
  }
  p {
    flex: 10;
  }

  button {
    display: flex;
    flex: 0;
    justify-content: center;
    color: ${(props) => props.theme["gray-300"]};
    background: none;
    border: none;
    padding: 0.25rem;

    &:focus-visible,
    &:hover {
      color: ${(props) => props.theme["red-300"]};
      border-radius: 0.5rem;
      background-color: ${(props) => props.theme["gray-400"]};
    }
  }
`;
