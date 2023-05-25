import styled from "styled-components";

export const TasksInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4em 0 1.5em 0;
  font-size: 87.5%;
  font-weight: 700;

  span {
    color: ${(props) => props.theme["gray-200"]};
    padding: 0.125rem 0.5rem;
    margin-left: 0.25rem;
    border-radius: 999px;
    background-color: ${(props) => props.theme["gray-400"]};
  }

  p:first-child {
    color: ${(props) => props.theme["blue"]};
  }

  p:last-child {
    color: ${(props) => props.theme["purple"]};
  }
`;

export const ToDoList = styled.ul`
  display: grid;
  gap: 1rem;
`;

export const Task = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme["gray-400"]};
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme["gray-500"]};
`;

export const TaskIncomplete = styled.span`
  display: flex;
  justify-content: left;
  width: 100%;
  color: ${(props) => props.theme["gray-100"]};
  transition: text-decoration 0.5s ease-out, color 0.5s ease-out;
`;

export const TaskComplete = styled.span`
  display: flex;
  justify-content: left;
  width: 100%;
  color: ${(props) => props.theme["gray-100"]};
  transition: text-decoration 0.5s ease-out, color 0.5s ease-out;

  color: ${(props) => props.theme["gray-300"]};
  text-decoration: line-through;
`;

export const ButtonTaskIncomplete = styled.button`
  display: flex;
  justify-content: center;
  padding: 0.125rem;
  font-size: 87.5%;
  border: 1px solid ${(props) => props.theme["blue"]};
  border-radius: 999px;
  background: none;
  transition: opacity 0.15s, background-color 0.15s, border 0.15s;

  svg {
    opacity: 0;
  }

  &:focus-visible,
  &:hover {
    opacity: 0.7;
    background-color: rgba(${(props) => props.theme["blue"]}, 0.1);
  }
`;

export const ButtonTaskComplete = styled.button`
  display: flex;
  justify-content: center;
  padding: 0.125rem;
  font-size: 87.5%;
  border: 1px solid ${(props) => props.theme["blue"]};
  border-radius: 999px;
  background: none;
  transition: opacity 0.15s, background-color 0.15s, border 0.15s;

  color: ${(props) => props.theme["gray-100"]};
  border: 1px solid ${(props) => props.theme["purple-Dark"]};
  background-color: ${(props) => props.theme["purple-Dark"]};

  svg {
    opacity: 1;
  }

  &:focus-visible,
  &:hover {
    opacity: 1;
    background-color: ${(props) => props.theme["purple-Dark"]};
    border: 1px solid ${(props) => props.theme["purple-Dark"]};
  }
`;

export const ButtonDelete = styled.button`
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  font-size: 120%;
  color: ${(props) => props.theme["gray-300"]};
  border: none;
  background: none;
  transition: background-color 0.15s, border-radius 0.15s;

  &:focus-visible,
  &:hover {
    color: ${(props) => props.theme["Danger"]};
    border-radius: 0.5rem;
    background-color: ${(props) => props.theme["gray-400"]};
  }
`;

export const EmptyList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4em;
  gap: 1rem;
  color: ${(props) => props.theme["gray-300"]};

  svg {
    font-size: 350%;
    opacity: 0.5;
  }
`;
