import { Header } from "../../components/Header";
import { FormAddTask, HomeContainer, HomeContent } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <HomeContent>
        <FormAddTask>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button>Criar</button>
        </FormAddTask>
      </HomeContent>
    </HomeContainer>
  );
}
