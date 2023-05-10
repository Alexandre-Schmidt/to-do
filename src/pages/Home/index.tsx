import { PlusCircle } from "@phosphor-icons/react";

import { Header } from "../../components/Header/index";

import {
  FormAddTask,
  HomeContainer,
  HomeContent,
  InfoTask,
  TasksCompleted,
  TasksCreated,
} from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <HomeContent>
        <FormAddTask>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button>
            Criar
            <PlusCircle size={18} />
          </button>
        </FormAddTask>
        <InfoTask>
          <TasksCreated>
            <span>Tarefas criadas</span>
            <span>0</span>
          </TasksCreated>
          <TasksCompleted>
            <span>Concluídas</span>
            <span>0</span>
          </TasksCompleted>
        </InfoTask>
      </HomeContent>
    </>
  );
}
