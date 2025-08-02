import styles from "./NewButton.module.css";

export const NewButton = () => {
  return (
    <button className={styles.button}>
      <span>New</span>
      {/* <BsCaretDownFill className={styles.icon} /> */}
    </button>
  );
};
