import { useEffect, useRef, useState } from "react";
import styles from "../styles/AudioPlayer.module.css";

type Props = {
  audio: string;
};

export default function AudioPlayer({ audio }: Props) {
  const audioRef = useRef(new Audio(audio));
  const intervalRef = useRef<NodeJS.Timeout>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const audioElement = audioRef.current;

  useEffect(() => {
    if (isPlaying) {
      audioElement.play();
      intervalRef.current = setInterval(() => {
        setProgress(audioElement.currentTime);
      }, 2000);
    } else {
      clearInterval(intervalRef.current);
      audioElement.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      audioElement.pause();
    };
  }, []);

  return (
    <div className={styles.audioPlayer}>
      <input
        className={styles.duration}
        type="range"
        min="0"
        max={audioElement.duration}
        value={progress}
      />
      <button className={styles.btn} onClick={() => setIsPlaying(!isPlaying)}>
        <img src={isPlaying ? "/pause.svg" : "/play.svg"} />
      </button>
      {/* <audio className={styles.audiofigure} controls src={audio} /> */}
    </div>
  );
}
