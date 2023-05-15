import { TaskTypes } from "./TaskSubmitForm";

import { ButtonTaskComplete, Container, Task, TasksInfo } from "./styles";
import { Check } from "../../../node_modules/@phosphor-icons/react/dist/index";
import Trash from "../../../node_modules/@phosphor-icons/react/dist/icons/Trash";

type TaskSubmitFormProps = {
  tasks: TaskTypes[];
  setTasks: React.Dispatch<React.SetStateAction<TaskTypes[]>>;
};

export function ListTask({ tasks, setTasks }: TaskSubmitFormProps) {
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
          <ButtonTaskComplete
            className={task.isComplete ? "btnComplete" : "btnIncomplete"}
          >
            <Check weight="bold" />
          </ButtonTaskComplete>
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
