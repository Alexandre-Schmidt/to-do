import styled from "styled-components";

export const HomeContent = styled.div`
  width: 46rem;
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

export const InfoTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
  font-weight: 700;
  line-height: 17px;
`;

export const TasksCreated = styled.div`
  color: ${(props) => props.theme["blue-300"]};

  span:last-child {
    background: ${(props) => props.theme["gray-400"]};
    color: ${(props) => props.theme["gray-200"]};
    padding: 2px 8px;
    border-radius: 999px;
    margin-left: 0.5rem;
  }
`;

export const TasksCompleted = styled.div`
  color: ${(props) => props.theme["purple-300"]};

  span:last-child {
    background: ${(props) => props.theme["gray-400"]};
    color: ${(props) => props.theme["gray-200"]};
    padding: 2px 8px;
    border-radius: 999px;
    margin-left: 0.5rem;
  }
`;
