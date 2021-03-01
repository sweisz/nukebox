import styles from "../styles/TrackDetails.module.css";

type Props = {
  id: string;
  imgSrc: string;
  title: string;
  artist: string;
};

export default function TrackDetails({ imgSrc, title, artist }: Props) {
  return (
    <>
      <div className={styles.content}>
        <img className={styles.img} src={imgSrc} />
        <div className={styles.title}> {title}</div>
        <div className={styles.artist}> {artist}</div>
      </div>
    </>
  );
}
