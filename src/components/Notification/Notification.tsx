import styles from "./Notification.module.css";
import NotificationIcon from "@/assets/notification.svg?react";
import EllipseIcon from "@/assets/ellipse.svg?react";

export const Notification = () => {
  return (
    <div className={styles.container}>
      <NotificationIcon className={styles.notificationIcon} />
      <EllipseIcon className={styles.ellipseIcon} />
    </div>
  );
};
