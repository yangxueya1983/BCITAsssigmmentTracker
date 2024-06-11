import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsCheck } from "react-icons/bs";

export function Assignment({assignItem, assignList, setAssignList}) {

  const deleteAssignment = () => {
    const updatedList = assignList.map((item) =>
      item.id === assignItem.id ? { ...item, deleted: true } : item
    );
    setAssignList(updatedList);
  } 

  const doneAssignment = () => {
    const updatedList = assignList.map((item) =>
      item.id === assignItem.id ? { ...item, completed: !assignItem.completed } : item
    );
    setAssignList(updatedList);
  } 
  
  return (
    <div className={styles.assignment}>
      <button onClick={doneAssignment} className={styles.checkContainer}>
        {assignItem.completed? <BsCheck /> : <div />}
      </button>

      <p className={assignItem.completed ? styles.textCompleted: ""}>{assignItem.title}</p>

      <button onClick={deleteAssignment} className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
