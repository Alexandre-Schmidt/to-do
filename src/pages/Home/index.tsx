import { useState } from "react";

import { Header } from "../../components/Header/index";
import { ListTask } from "../../components/ListTask";
import { TaskSubmitForm } from "../../components/TaskSubmitForm";

import { HomeContent } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState([]);
  /* const tasks = [
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
    {
      id: 4,
      title: "Tarefa 4",
    },
  ]; */

  return (
    <>
      <Header />
      <HomeContent>
        <TaskSubmitForm tasks={tasks} setTasks={setTasks} />
        <ListTask tasks={tasks} setTasks={setTasks} />
      </HomeContent>
    </>
  );
}
