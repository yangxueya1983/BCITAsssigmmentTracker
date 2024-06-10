import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

export function Assignment({assignItem, assignList, setAssignList}) {

  const deleteAssignment = () => {
    const updatedList = assignList.map((item) =>
      item.id === assignItem.id ? { ...item, deleted: true } : item
    );
    setAssignList(updatedList);
  } 

  const doneAssignment = () => {
    const updatedList = assignList.map((item) =>
      item.id === assignItem.id ? { ...item, completed: true } : item
    );
    setAssignList(updatedList);
  } 
  //onClick={doneAssignment(assignItem.id)} 
  
  return (
    <div className={styles.assignment}>
      <button onClick={doneAssignment} className={styles.checkContainer}>
        <div />
      </button>

      <p>{assignItem.title}</p>

      <button onClick={deleteAssignment} className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
