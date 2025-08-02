import type React from "react";
import styles from "./User.module.css";

type UserProps = {
  username: string;
};

export const User: React.FC<UserProps> = ({ username }) => {
  return (
    <div>
      <span className={styles.username}>{username}</span>
    </div>
  )
}