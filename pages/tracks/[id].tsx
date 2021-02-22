import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { APITrack, getTrack } from "../../utils/api";
import styles from "../../styles/TrackItem.module.css";
import AudioPlayer from "../../components/AudioPlayer";
import Navigation from "../../components/Navigation";
import TrackDetails from "../../components/TrackDetails";

export default function Track() {
  const router = useRouter();
  const { id } = router.query;

  const [track, setTrack] = useState<APITrack>(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    getTrack(id).then((newTrack) => {
      setTrack(newTrack);
    });
  }, [id]);

  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header className={styles.header}>
        <Navigation />
      </header>

      <main>
        <TrackDetails
          imgSrc={track.imgSrc}
          title={track.title}
          artist={track.artist}
        />
      </main>
      <footer>
        <AudioPlayer audio={track.audio} />
      </footer>
    </div>
  );
}
