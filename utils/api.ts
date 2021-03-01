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

export async function deleteTrack(id) {
  // await fetch("/api/tracks/" + id, {
  await fetch(`/api/tracks/${id}`, {
    method: "DELETE",
  });
}

export async function addTrack(data) {
  const response = fetch("http://localhost:3000/api/tracks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response;
}
