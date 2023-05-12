import { v4 as uuid } from "uuid";
import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, FormEvent, useState } from "react";

import { FormContainer } from "./styles";

export type TaskTypes = {
  id: string;
  title: string;
};

type TaskSubmitFormProps = {
  tasks: TaskTypes[];
  setTasks: React.Dispatch<React.SetStateAction<TaskTypes[]>>;
};

export function TaskSubmitForm({ tasks, setTasks }: TaskSubmitFormProps) {
  const [newTask, setNewTask] = useState("");

  function handleTaskSubmit(event: FormEvent) {
    event.preventDefault();

    setTasks([{ id: uuid(), title: newTask }, ...tasks]);
    console.log("entrouuuu");
    setNewTask("");
  }

  function handleTaskInput(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
    console.log(newTask);
  }

  return (
    <FormContainer onSubmit={handleTaskSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={handleTaskInput}
        required
      />
      <button type="submit" title="Criar nova tarefa">
        Criar
        <PlusCircle size={18} />
      </button>
    </FormContainer>
  );
}
