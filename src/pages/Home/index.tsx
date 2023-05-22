import { useState } from "react";

import { Header } from "../../components/Header/index";
import { ListTask } from "../../components/ListTask";
import { TaskSubmitForm } from "../../components/TaskSubmitForm";

import { HomeContent } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState([]);
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
