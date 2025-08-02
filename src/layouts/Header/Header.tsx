import { HamburgerMenu } from "@/components/HamburgerMenu/HamburgerMenu";
import { NewButton } from "@/components/NewButton/NewButton";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { TimerLabel } from "@/components/TimerLabel/TimerLabel";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <HamburgerMenu />
      <div className={styles.navbar}>
        <TimerLabel className={styles.timerLabel} />
        <SearchBar />
        <NewButton />
      </div>
    </header>
  );
};
