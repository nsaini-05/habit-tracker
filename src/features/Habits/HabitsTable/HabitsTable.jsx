import TableBody from "../TableBody/TableBody";
import TableHeader from "../TableHeader/TableHeader";
import styles from "./HabitsTable.module.css";
function HabitsTable() {
  return (
    <main className={styles.tableContainer}>
      <TableHeader />
      <TableBody />
    </main>
  );
}

export default HabitsTable;
