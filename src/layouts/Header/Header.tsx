import { HamburgerMenu } from "@/components/HamburgerMenu/HamburgerMenu";
import { NewButton } from "@/components/NewButton/NewButton";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { TimerLabel } from "@/components/TimerLabel/TimerLabel";
import styles from "./Header.module.css";
import { Notification } from "@/components/Notification/Notification";
import { User } from "@/components/User/User";

export const Header = () => {
  return (
    <header className={styles.header}>
      <HamburgerMenu />
      <div className={styles.navbar}>
        <TimerLabel className={styles.timerLabel} />
        <SearchBar placeholder="Search" />
        <div className={styles.userActions}>
          <NewButton />
          <Notification />
          <User username="Nick Robins"/>
        </div>
      </div>
    </header>
  );
};
