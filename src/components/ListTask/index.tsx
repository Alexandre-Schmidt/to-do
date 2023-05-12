import { Trash } from "@phosphor-icons/react";
import { Container, Task, TasksInfo } from "./styles";

type TaskSubmitFormProps = {
  tasks: TaskTypes[];
  setTasks: React.Dispatch<React.SetStateAction<TaskTypes[]>>;
};

export function ListTask({ tasks, setTasks }: TaskSubmitFormProps) {
  const tasks = [
    {
      id: 1,
      title: "Tarefa 1",
    },
    {
      id: 2,
      title: "Tarefa 2",
    },
    {
      id: 3,
      title: "Tarefa 3",
    },
  ];

  return (
    <Container>
      <TasksInfo>
        <p>
          Tarefas criadas<span>0</span>
        </p>

        <p>
          Concluídas <span>2 de 5</span>
        </p>
      </TasksInfo>

      {tasks.map((task) => (
        <Task key={task.id}>
          <input type="checkbox" />
          <p>{task.title}</p>
          <button>
            <Trash size={24} weight="light" />
          </button>
        </Task>
      ))}
    </Container>
  );
}
