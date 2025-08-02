import styles from "./NewButton.module.css";
import SortDownIcon from "@/assets/sort-down.svg?react";

export const NewButton = () => {
  return (
    <button className={styles.button}>
      <span>New</span>
      <SortDownIcon className={styles.icon} />
    </button>
  );
};
