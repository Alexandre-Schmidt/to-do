import { Trash } from "@phosphor-icons/react";
import { Container, Task, TasksInfo } from "./styles";

export function ListTask() {
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
      <Task>
        <input type="checkbox" />
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
        <Trash size={32} weight="light" />
      </Task>
    </Container>
  );
}
