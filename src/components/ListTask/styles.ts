import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 4rem;
  font-weight: 700;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme["gray-400"]};
`;
