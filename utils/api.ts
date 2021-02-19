export type APITrack = {
  id: string;
  imgSrc: string;
  title: string;
  artist: string;
  audio: string;
};

export async function getTracks() {
  const response = await fetch("/api/tracks");
  const tracks: APITrack[] = await response.json();
  return tracks;
}

export async function getTrack(id) {
  const response = await fetch(`/api/tracks/${id}`);
  const track: APITrack = await response.json();
  return track;
}
