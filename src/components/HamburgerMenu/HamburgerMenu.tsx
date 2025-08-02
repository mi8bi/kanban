import styles from "./HamburgerMenu.module.css";
import HamburgerIcon from "@/assets/menu-btn.svg?react";

export const HamburgerMenu = () => {
  return (
    <button
      type="button"
      className={styles.iconButton}
      aria-label="メニューを開く"
    >
      <HamburgerIcon />
    </button>
  );
};
