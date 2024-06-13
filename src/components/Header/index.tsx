import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import React, { useState } from "react";

export function Header({assignList, setAssignList}) {

  const [inputAssignment, setInputAssignment] = useState<string>('')
 
  const handelAddNewAssignment = (e:React.FormEvent) => {
    e.preventDefault()
    const newAss = {
      id: assignList.length,
      title: inputAssignment,
      completed: false,
      deleted: false
    }
    
    //const newArr = assignList.concat(newAss)
    // setAssignList(newArr)

    setAssignList((assignList)=>{
      return [...assignList, newAss]
    })

    setInputAssignment('')
  } 

 
  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handelAddNewAssignment}>
        <input 
        value={inputAssignment}
        onChange={(e)=>{setInputAssignment(e.target.value)}} 
        placeholder="Add a new assignment" 
        type="text"/>
        <button disabled={!inputAssignment.trim()}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
