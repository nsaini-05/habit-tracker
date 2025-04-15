import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./AppLayout.module.css";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router";
function AppLayout() {
  return (
    <div className={styles.centeredContainer}>
      <Sidebar />
      <div className={styles.mainHabitsContainer}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
