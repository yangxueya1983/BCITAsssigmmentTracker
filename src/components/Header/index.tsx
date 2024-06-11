import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";

export function Header({assignList, setAssignList}) {

  const [inputAssignment, setInputAssignment] = useState('')
  const handleInputChange = (e) => {
    setInputAssignment(e.target.value)
  }
  
  const addNewAssignment = () => {
    const newAss = {
      id: assignList.length,
      title: inputAssignment,
      completed: false,
      deleted: false
    }
    const newArr = assignList.concat(newAss)
    setAssignList(newArr)
    setInputAssignment('')
  } 

 
  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input value={inputAssignment} onChange={handleInputChange} placeholder="Add a new assignment" type="text"/>
        <button type="button" onClick={addNewAssignment} disabled={!inputAssignment.trim()}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
