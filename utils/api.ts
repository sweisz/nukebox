export type APITrack = {
  id: string;
  imgSrc: string;
  title: string;
  artist: string;
};

export async function getTracks() {
  const response = await fetch("/api/tracks");
  const tracks: APITrack[] = await response.json();
  //   tracks.map(track)
  return tracks;
}
