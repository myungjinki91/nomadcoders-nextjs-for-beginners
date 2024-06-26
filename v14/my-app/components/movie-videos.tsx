import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  throw new Error("I'm an error");
  //   const response = await fetch(API_URL + `/${id}/videos`);
  //   return await response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const video = await getVideos(id);
  return <h6>{JSON.stringify(video)}</h6>;
}
