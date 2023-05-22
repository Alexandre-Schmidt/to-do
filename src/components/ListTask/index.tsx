import { Check, Trash } from "@phosphor-icons/react";
import { React } from "react";

import { TaskTypes } from "../TaskSubmitForm";

import {
  ButtonDelete,
  ButtonTaskComplete,
  ButtonTaskIncomplete,
  Container,
  Task,
  TasksInfo,
} from "./styles";

type TaskSubmitFormProps = {
  tasks: TaskTypes[];
  setTasks: React.Dispatch<React.SetStateAction<TaskTypes[]>>;
};

export function ListTask({ tasks, setTasks }: TaskSubmitFormProps) {
  function handleTaskComplete(id: string) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.isComplete = !task.isComplete;
        }
        return task;
      })
    );
  }

  function handleTaskDelete(id: string) {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  }

  const taskCount = tasks.length;
  const taskCompleteCount = tasks.filter((task) => {
    return task.isComplete;
  }).length;

  return (
    <Container>
      <TasksInfo>
        <p>
          Tarefas criadas<span>{taskCount}</span>
        </p>

        <p>
          Concluídas{" "}
          <span>
            {taskCompleteCount} de {taskCount}
          </span>
        </p>
      </TasksInfo>

      {tasks.map((task) => (
        <Task key={task.id}>
          {task.isComplete ? (
            <ButtonTaskComplete onClick={() => handleTaskComplete(task.id)}>
              <Check weight="bold" />
            </ButtonTaskComplete>
          ) : (
            <ButtonTaskIncomplete onClick={() => handleTaskComplete(task.id)}>
              <Check weight="bold" />
            </ButtonTaskIncomplete>
          )}
          <p>{task.title}</p>
          <ButtonDelete onClick={() => handleTaskDelete(task.id)}>
            <Trash size={24} weight="light" />
          </ButtonDelete>
        </Task>
      ))}
    </Container>
  );
}
