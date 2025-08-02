import type React from "react";
import styles from "./TimerLabel.module.css";
import TimerIcon from "@/assets/timer.svg?react";

type TimerLabelProps = {
  className?: string;
};

export const TimerLabel: React.FC<TimerLabelProps> = ({ className }) => {
  return (
    <div className={`${styles.timerLabel} ${className ?? ""}`}>
      <TimerIcon className={styles.timerIcon} />
      <span className={styles.timerText}>Timer</span>
    </div>
  );
};
