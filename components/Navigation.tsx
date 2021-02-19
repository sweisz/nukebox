import styles from "../styles/Navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles.header}>
      <button onClick={() => history.back()}>&lt;</button>
      <p>Now Playing</p>
    </div>
  );
}
