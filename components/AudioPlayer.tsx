import styles from "../styles/AudioPlayer.module.css";

type Props = {
  audio: string;
};

export default function AudioPlayer({ audio }: Props) {
  return (
    <figure className={styles.audiofigure}>
      <audio controls src={audio}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </figure>
  );
}
