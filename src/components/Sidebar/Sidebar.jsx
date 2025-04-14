import styles from "./Sidebar.module.css";
import { BsReverseLayoutSidebarReverse } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { toggleSideBar } from "../../features/ui/DisplaySlice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
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
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            styles.routeButton + (isActive ? ` ${styles.linkButtonActive}` : "")
          }
        >
          <div className={`${styles.linkButton} `}>
            <MdOutlineSpaceDashboard size={20} />
            <div>Dashboard</div>
          </div>
        </NavLink>

        <NavLink
          to="/stats"
          className={({ isActive }) =>
            styles.routeButton + (isActive ? ` ${styles.linkButtonActive}` : "")
          }
        >
          <div className={` ${styles.linkButton}`}>
            <IoStatsChartOutline size={20} />
            <div>Statistics</div>
          </div>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            styles.routeButton + (isActive ? ` ${styles.linkButtonActive}` : "")
          }
        >
          <div className={` ${styles.linkButton}`}>
            <IoSettingsOutline size={20} />
            <div>Settings</div>
          </div>
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;
