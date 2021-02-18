export type APITrack = {
  id: string;
  imgSrc: string;
  title: string;
  artist: string;
};

export async function getTracks(params: type) {
  const response = await fetch("/api/tracks");
  const tracks: Array[] = await response.json();
  //   tracks.map(track)
  return tracks;
}
