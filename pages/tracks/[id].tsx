import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/TrackItem.module.css";
import AudioPlayer from "../../components/AudioPlayer";
import Navigation from "../../components/Navigation";
import TrackDetails from "../../components/TrackDetails";
import { APITrack, deleteTrack, getTrack } from "../../utils/api";

export default function Track() {
  const router = useRouter();
  const { id } = router.query;

  const [track, setTrack] = useState<APITrack>(null);

  const handleDeleteClick = async () => {
    await deleteTrack(id);
    router.back();
  };

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
          id={track.id}
          imgSrc={track.imgSrc}
          title={track.title}
          artist={track.artist}
        />
      </main>
      <div>
        <button className={styles.delete} onClick={handleDeleteClick}>
          DELETE ! TRACK
        </button>
      </div>
      <footer>
        <AudioPlayer audio={track.audio} />
      </footer>
    </div>
  );
}
