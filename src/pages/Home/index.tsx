import { useState } from "react";

import { Header } from "../../components/Header";
import { TaskList } from "../../components/TaskList";

import { TaskSubmitForm, TaskTypes } from "../../components/TaskSubmitForm";

import { HomeContent } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState<TaskTypes[]>([]);
  return (
    <>
      <Header />
      <HomeContent>
        <TaskSubmitForm tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </HomeContent>
    </>
  );
}
