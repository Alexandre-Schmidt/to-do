import { Header } from "../../components/Header/index";

import { HomeContent } from "./styles";
import { TaskSubmitForm } from "../../components/TaskSubmitForm";
import { ListTask } from "../../components/ListTask";

export function Home() {
  return (
    <>
      <Header />
      <HomeContent>
        <TaskSubmitForm />
        <ListTask />
      </HomeContent>
    </>
  );
}
