import * as React from "react";
import { Check, ClipboardText, Trash } from "@phosphor-icons/react";

import { TaskTypes } from "../TaskSubmitForm";

import {
  ButtonDelete,
  ButtonTaskComplete,
  ButtonTaskIncomplete,
  EmptyList,
  Task,
  TaskComplete,
  TaskIncomplete,
  TasksInfo,
  ToDoList,
} from "./styles";

type TaskSubmitFormProps = {
  tasks: TaskTypes[];
  setTasks: React.Dispatch<React.SetStateAction<TaskTypes[]>>;
};

export function TaskList({ tasks, setTasks }: TaskSubmitFormProps) {
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
    <>
      <TasksInfo>
        <p>
          Tarefas criadas <span>{taskCount}</span>
        </p>
        <p>
          Concluídas{" "}
          {taskCount > 0 ? (
            <span>
              {taskCompleteCount} de {taskCount}
            </span>
          ) : (
            <span>{taskCount}</span>
          )}
        </p>
      </TasksInfo>

      {taskCount > 0 ? (
        <ToDoList>
          {tasks.map((task) => (
            <Task key={task.id}>
              {/* Button Complete or incomplete */}
              {task.isComplete ? (
                <ButtonTaskComplete onClick={() => handleTaskComplete(task.id)}>
                  <Check weight="bold" />
                </ButtonTaskComplete>
              ) : (
                <ButtonTaskIncomplete
                  onClick={() => handleTaskComplete(task.id)}
                >
                  <Check weight="bold" />
                </ButtonTaskIncomplete>
              )}

              {/* Content */}
              {task.isComplete ? (
                <TaskComplete>{task.title}</TaskComplete>
              ) : (
                <TaskIncomplete>{task.title}</TaskIncomplete>
              )}

              {/* Button Delete */}
              <ButtonDelete onClick={() => handleTaskDelete(task.id)}>
                <Trash size={24} weight="light" />
              </ButtonDelete>
            </Task>
          ))}
        </ToDoList>
      ) : (
        <EmptyList>
          <ClipboardText weight="light" />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong> <br />
            Crie tarefas e organize seus itens a fazer
          </p>
        </EmptyList>
      )}
    </>
  );
}
