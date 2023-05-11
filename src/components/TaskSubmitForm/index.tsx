import { PlusCircle } from "@phosphor-icons/react";
import { Container } from "./styles";

export function TaskSubmitForm() {
  return (
    <Container>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar
        <PlusCircle size={18} />
      </button>
    </Container>
  );
}
