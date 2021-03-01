import { useRouter } from "next/router";
import { useState } from "react";
import { addTrack } from "../utils/api";
import styles from "../styles/New.module.css";

function New() {
  const [title, setTitle] = useState(null);
  const [artist, setArtist] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [audio, setAudio] = useState(null);

  const id = `${artist}_${title}`;
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { id, imgSrc, title, artist, audio };
    await addTrack(data);

    const addMore = confirm("Add more?");
    if (addMore === true) {
      setTitle("");
      setArtist("");
      setImgSrc("");
      setAudio("");
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <h2 className={styles.heading}>Create a New Entry.</h2>
      <form className={styles.newform} onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            required
            placeholder={"Track Title."}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label>
          Artist:
          <input
            required
            placeholder={"Artist Name."}
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
          />
        </label>
        <label>
          Image Source:
          <input
            required
            placeholder={"Put the Image URL."}
            value={imgSrc}
            onChange={(event) => setImgSrc(event.target.value)}
          />
        </label>
        <label>
          Audio Source:
          <input
            required
            placeholder={"Put the Audio URL."}
            value={audio}
            onChange={(event) => setAudio(event.target.value)}
          />
        </label>
        <input className={styles.submitBtn} type="submit" value="Create" />
      </form>
    </>
  );
}

export default New;
