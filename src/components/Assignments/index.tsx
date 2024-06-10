import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

export function Assignments({createdCount, assignList, setAssignList}) {

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{createdCount}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{assignList.filter((item) => item.completed).length} of {assignList.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignList.filter((item) => !item.deleted).map((assignItem) => (
          <Assignment key={assignItem.id} assignItem={assignItem} assignList={assignList} setAssignList={setAssignList}/>
        ))}
      </div>
    </section>
  );
}
