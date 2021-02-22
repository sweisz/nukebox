import styles from "../styles/Navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles.header}>
      <button
        className={styles.ickeyboardarrowleft24px}
        onClick={() => history.back()}
      ></button>
      <p>Now Playing</p>
    </div>
  );
}
