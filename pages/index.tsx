import Head from "next/head";
import Greeting from "../components/Greeting";
import TrackItem from "../components/TrackItem";
import styles from "../styles/Home.module.css";

export default function Home() {
  const tracks = [
    {
      imgSrc: "/zappa_small.png",
      title: "Strictly Genteel",
      artist: "Frank Zappa",
    },
    {
      imgSrc: "/zappa_small.png",
      title: "Muffin Man",
      artist: "Frank Zappa",
    },
  ];

  const trackItems = tracks.map((track) => (
    <TrackItem
      key={`${track.artist}-${track.title}`}
      imgSrc={track.imgSrc}
      artist={track.artist}
      title={track.title}
    />
  ));

  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Greeting name="Friend" />
      <ul className={styles.list}>{trackItems}</ul>
    </div>
  );
}
