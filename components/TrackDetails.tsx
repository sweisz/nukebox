import { Router } from "next/router";
import styles from "../styles/TrackDetails.module.css";
import { deleteTrack } from "../utils/api";

type Props = {
  id: string;
  imgSrc: string;
  title: string;
  artist: string;
};

export default function TrackDetails({ id, imgSrc, title, artist }: Props) {
  return (
    <>
      <div className={styles.content}>
        <img className={styles.img} src={imgSrc} alt="" />
        <div className={styles.title}> {title}</div>
        <div className={styles.artist}> {artist}</div>
      </div>
    </>
  );
}
