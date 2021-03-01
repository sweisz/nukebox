import Head from "next/head";
import React, { useEffect, useState } from "react";
import Greeting from "../components/Greeting";
import TrackItem from "../components/TrackItem";
import styles from "../styles/Home.module.css";
import { APITrack, getTracks } from "../utils/api";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const [tracks, setTracks] = useState<APITrack[]>([]);

  useEffect(() => {
    console.log("Home page is mounted");
    getTracks().then((newTracks) => {
      setTracks(newTracks);
    });
  }, []);

  // async function doFetch() {
  //   const newTracks = await getTracks();
  //   setTracks(newTracks);
  // }
  // doFetch()

  const trackItems = tracks.map((track) => (
    // <Link href={"/tracks/" + track.id} key={track.id}>
    <Link href={`/tracks/${track.id}`} key={track.id}>
      <a>
        <TrackItem
          imgSrc={track.imgSrc}
          artist={track.artist}
          title={track.title}
        />
      </a>
    </Link>
  ));

  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Greeting name="Friend" />
      <ul className={styles.list}>{trackItems}</ul>
      <button className={styles.btnNew} onClick={() => router.push("/new")}>
        Create a New Entry
      </button>
    </div>
  );
}
