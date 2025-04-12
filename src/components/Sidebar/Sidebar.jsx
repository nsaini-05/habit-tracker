import styles from "./Sidebar.module.css";
import { BsReverseLayoutSidebarReverse } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { toggleSideBar } from "../../features/ui/DisplaySlice";
import { useDispatch, useSelector } from "react-redux";
function Sidebar() {
  const dispatch = useDispatch();
  const { showSideBar } = useSelector((state) => state.displayControls);

  return (
    <aside
      className={`${styles.sidebar} ${
        !showSideBar ? styles.sidebarHidden : ""
      }`}
    >
      <div className={styles.controlsContainer}>
        <button
          className={styles.sidebarIcon}
          onClick={() => dispatch(toggleSideBar())}
        >
          <BsReverseLayoutSidebarReverse size={20} />
        </button>
      </div>

      <div className={styles.linkContainer}>
        <div
          className={`${styles.linkButton} primary`}
          style={{ background: "none" }}
        >
          <MdOutlineSpaceDashboard size={20} />
          <div>Dashboard</div>
        </div>
        <div className={`primary ${styles.linkButton}`}>
          <IoSettingsOutline size={20} />

          <div>Settings</div>
        </div>
        <div className={`primary ${styles.linkButton}`}>
          <IoStatsChartOutline size={20} />
          <div>Statistics</div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
