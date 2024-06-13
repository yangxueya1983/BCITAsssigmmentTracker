import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

type AssignData = {
  id: number
  title: string
  completed: boolean
  deleted: boolean
}

type Props = {
  assignments:AssignData[],
  setAssignments: any
}

function App() {

  const [assignList, setAssignList] = useState<AssignData[]>([])

  return (
    <>
    <Header assignList={assignList} setAssignList={setAssignList}/>
    <Assignments assignList={assignList} setAssignList={setAssignList}/>
    </>
  );
}

export default App;
