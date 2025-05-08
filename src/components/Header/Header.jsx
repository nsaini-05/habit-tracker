import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../../features/ui/DisplaySlice";
import { BsReverseLayoutSidebarReverse } from "react-icons/bs";
import { SlLogout } from "react-icons/sl";
import { LuBicepsFlexed } from "react-icons/lu";
import { increment } from "../../store/CounterSlice";
function Header() {
  const dispatch = useDispatch();
  const { showSideBar } = useSelector((state) => state.displayControls);
  const { counterValue } = useSelector((state) => state.numbers);
  console.log(counterValue);
  return (
    <header className={styles.header}>
      <button
        className={styles.sidebarIcon}
        onClick={() => dispatch(toggleSideBar())}
        style={{ visibility: !showSideBar ? "visible" : "hidden" }}
      >
        <BsReverseLayoutSidebarReverse size={20} />
      </button>
      <span className={styles.logo}>
        <LuBicepsFlexed /> Habit Tracker
      </span>
      <button className={styles.sidebarIcon}>
        <SlLogout size={20} />
      </button>

      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
    </header>
  );
}

export default Header;
