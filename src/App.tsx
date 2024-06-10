import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

type AssignData = {
  id: number
  title: string
  completed: boolean
  deleted: boolean
}

// interface AssigDataListProps {
//   assignments:AssignData[]
// }

function App() {
  const testData = {
    id: 0,
    title: "test",
    completed: false,
    deleted: false
  }
  const testData2 = {
    id: 1,
    title: "test",
    completed: false,
    deleted: false
  }

  const testArr = [/*testData, testData2*/]

  const [createdCount, setCreatedCount] = useState(testArr.length)
  const [assignList, setAssignList] = useState(testArr)

  return (
    <>
    <Header createdCount={createdCount} setCreatedCount = {setCreatedCount} assignList={assignList} setAssignList={setAssignList}/>
    <Assignments createdCount={createdCount} assignList={assignList} setAssignList={setAssignList}/>
    </>
  );
}

export default App;
