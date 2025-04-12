import HabitsTable from "../../features/Habits/HabitsTable/HabitsTable";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./AppLayout.module.css";
import Header from "../../components/Header/Header";
function AppLayout() {
  return (
    <div className={styles.centeredContainer}>
      <Sidebar />
      <div className={styles.mainHabitsContainer}>
        <Header />
        <HabitsTable />
      </div>
    </div>
  );
}

export default AppLayout;
