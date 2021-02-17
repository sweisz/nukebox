import styles from "../styles/TrackItem.module.css";

type Props = {
  title: string;
  artist: string;
  imgSrc: string;
};

export default function TrackItem(props: Props) {
  return (
    <div className={styles.track}>
      <img className={styles.img__album} src={props.imgSrc} alt="" />
      <ul className={styles.track__listtext}>
        <li>
          <span className={styles.track__title}>{props.title}</span>
        </li>
        <li>
          <span className={styles.track__artist}>{props.artist}</span>
        </li>
      </ul>
    </div>
  );
}
